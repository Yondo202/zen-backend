/**
 * order controller
 */

import { factories } from "@strapi/strapi";
import Stripe from "stripe";
const stripe = new Stripe(`sk_test_${process.env.STRIPE_SECRET_KEY}`);

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx) {
        const body = { ...ctx.request?.body?.data };

      //   const enquiryitem = await strapi
      //     .service("api::enquiry.enquiry", {
      //       populate: "*",
      //     })
      //     .findOne("11");

    //   console.log(body, "---->body")

      const enquiryItem = await strapi.entityService.findOne(
        "api::enquiry.enquiry",
        body.enqid,
        { populate: "*" }
      );


      
      const session = await stripe.checkout.sessions.create({
        customer_email: enquiryItem?.dateInfo?.email,
        // currency: "USD",
        mode: "payment",
        success_url: `${process.env.MAIN_DOMAIN}/services-checkout/${body?.enqid}?success=true`,
        cancel_url: `${process.env.MAIN_DOMAIN}/services-checkout/${body?.enqid}?canceled=true`,
        payment_method_types: ["card"],
        ui_mode: "hosted",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Enquiry number: ${enquiryItem?.enquiry_number}`,
              },
              //   unit_amount: entries.cost.calculatedCost,
              unit_amount: Math.ceil(enquiryItem.cost.calculatedCost)*100,
            },
            quantity: 1,
          },
        ],
      });

      const createdOrder = await strapi.entityService.create(
        "api::order.order",
        {
          data: {
              stripe_id:session.id,
              enquiry:JSON.stringify(enquiryItem),
              payment_status:session.payment_status,
              customer_email:session.customer_email,
              amount_total:session.amount_total,
              payment_url:session.url
          },
        }
      );

      return createdOrder
    },
  })
);