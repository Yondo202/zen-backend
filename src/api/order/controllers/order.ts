/**
 * order controller
 */

import { factories } from "@strapi/strapi";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import {
  sendCustomEmail,
  HTMLTemplate,
} from "../../enquiry/controllers/enquiry";

// const HTMLTemplate =
//   () => `<div style="font-family: Arial, Helvetica Neue, Helvetica; width:100%; padding: 20px; background-color: #e6eff6; display: flex;">
// <div style="background-color: #fff; padding: 40px 15px; display: flex; flex-direction: column;">
//   <h2>Your payment has been completed</h2>
// </div>
// </div>`;

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async update(ctx) {
      const body = { ...ctx.request?.body?.data, orderId: ctx.params?.id };
      // const enquiryItem = await strapi.entityService.update()
      // console.log(body?.payment_status)
      // console.log(body?.orderId, "orderId")

      const updatedOrder = await strapi.entityService.update(
        "api::order.order",
        body?.orderId,
        {
          data: {
            payment_status: body.payment_status,
          },
        }
      );

      await sendCustomEmail({
        to: updatedOrder.customer_email,
        subject: `Your payment has been completed`,
        html: HTMLTemplate({
          // subject: Model,
          // enqNumber: enqNumber,
          header: `Your payment has been <span
            style="line-height: inherit; color: #437ad9"
            >completed</span>`,
          enquiry: body?.enqData,
          enqid: body?.enqData.id,
        }),
      });

      return updatedOrder;
    },
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
              unit_amount: enquiryItem.cost.calculatedCost * 100,
            },
            quantity: 1,
          },
        ],
      });

      const createdOrder = await strapi.entityService.create(
        "api::order.order",
        {
          data: {
            stripe_id: session.id,
            //   enquiry:JSON.stringify(enquiryItem),
            enquiry: enquiryItem.id,
            payment_status: session.payment_status,
            customer_email: session.customer_email,
            amount_total: session.amount_total,
            payment_url: session.url,
          },
        }
      );

      return createdOrder;
    },
  })
);
