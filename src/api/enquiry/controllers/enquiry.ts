/**
 * enquiry controller
 */

import { factories } from "@strapi/strapi";
const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";
// const nodemailer = require("nodemailer");

type TSendCustom = {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
};

export const HTMLTemplate = ({ header, enquiry, enqid, redirectHead, detailTitle }) => ` <div
style="
  line-height: inherit;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #e6eff6;
"
>
<table
  bgcolor="#e6eff6"
  cellpadding="0"
  cellspacing="0"
  role="presentation"
  style="
    line-height: inherit;
    table-layout: fixed;
    min-width: 320px;
    margin: 0 auto;
    border-spacing: 0;
    vertical-align: top;
    background-color: #e6eff6;
    width: 100%;
    border-collapse: collapse;
  "
  valign="top"
  width="100%"
>
  <tbody style="line-height: inherit">
    <tr
      style="
        line-height: inherit;
        border-collapse: collapse;
        vertical-align: top;
      "
      valign="top"
    >
      <td
        style="
          line-height: inherit;
          border-collapse: collapse;
          word-break: break-word;
          vertical-align: top;
        "
        valign="top"
      >
        <div style="line-height: inherit; background-color: transparent">
          <div
            style="
              line-height: inherit;
              margin: 0 auto;
              min-width: 320px;
              max-width: 400px;
              word-wrap: break-word;
              word-break: break-word;
              background-color: #1c1c1f;
            "
          >
            <div
              style="
                line-height: inherit;
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: #1c1c1f;
              "
            >
              <div
                style="
                  line-height: inherit;
                  min-width: 320px;
                  max-width: 400px;
                  display: table-cell;
                  vertical-align: top;
                  width: 400px;
                "
              >
                <div style="line-height: inherit; width: 100%">
                  <div
                    style="
                      line-height: inherit;
                      border-top: 0px solid transparent;
                      border-left: 0px solid transparent;
                      border-bottom: 0px solid transparent;
                      border-right: 0px solid transparent;
                      padding-top: 5px;
                      padding-bottom: 5px;
                      padding-right: 0px;
                      padding-left: 0px;
                    "
                  >
                    <div
                      style="
                        color: #ffffff;
                        font-family: Arial, Helvetica Neue, Helvetica,
                          sans-serif;
                        line-height: 1.2;
                        padding-top: 10px;
                        padding-right: 10px;
                        padding-bottom: 10px;
                        padding-left: 10px;
                      "
                    >
                      <div
                        style="
                          font-size: 18px;
                          line-height: 1.2;
                          color: #ffffff;
                          font-family: Arial, Helvetica Neue, Helvetica,
                            sans-serif;
                        "
                      >
                        <p
                          style="
                            font-family: Arial, Helvetica Neue, Helvetica,
                              sans-serif;
                            font-size: 18px;
                            line-height: 1.2;
                            margin: 0;
                            font-weight: bold;
                          "
                        >
                          ${header}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="line-height: inherit; background-color: transparent">
          <div
            style="
              line-height: inherit;
              margin: 0 auto;
              min-width: 320px;
              max-width: 400px;
              word-wrap: break-word;
              word-break: break-word;
              background-color: #ffffff;
            "
          >
            <div
              style="
                line-height: inherit;
                border-collapse: collapse;
                display: table;
                width: 100%;
                background-color: #ffffff;
              "
            >
              <div
                style="
                  line-height: inherit;
                  min-width: 320px;
                  max-width: 400px;
                  display: table-cell;
                  vertical-align: top;
                  width: 400px;
                "
              >
                <div style="line-height: inherit; width: 100%">
                  <div
                    style="
                      line-height: inherit;
                      border-top: 0px solid transparent;
                      border-left: 0px solid transparent;
                      border-bottom: 0px solid transparent;
                      border-right: 0px solid transparent;
                      padding-top: 5px;
                      padding-bottom: 0px;
                      padding-right: 0px;
                      padding-left: 0px;
                    "
                  >
                    <div
                      style="
                        color: #555555;
                        font-family: Arial, Helvetica Neue, Helvetica,
                          sans-serif;
                        line-height: 1.2;
                        padding-top: 10px;
                        padding-right: 0px;
                        padding-bottom: 0px;
                        padding-left: 0px;
                      "
                    >
                      <div
                        style="
                          font-size: 14px;
                          line-height: 1.2;
                          color: #555555;
                          font-family: Arial, Helvetica Neue, Helvetica,
                            sans-serif;
                        "
                      >
                        <center
                          style="
                            line-height: inherit;
                            margin-top: 10px;
                            margin-bottom: 10px;
                          "
                        >
                          <a
                            href="${process.env.MAIN_DOMAIN}/services-checkout/${enqid}"
                            style="
                              line-height: inherit;
                              font-size: 18px;
                              font-weight: bold;
                              color: #29b6f6;
                              text-decoration: none;
                            "
                            target="_blank"
                            >${redirectHead} &gt; &gt;</a
                          >
                        </center>
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            line-height: inherit;
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            min-width: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody style="line-height: inherit">
                            <tr
                              style="
                                line-height: inherit;
                                border-collapse: collapse;
                                vertical-align: top;
                              "
                              valign="top"
                            >
                              <td
                                style="
                                  line-height: inherit;
                                  border-collapse: collapse;
                                  min-width: 100%;
                                  vertical-align: top;
                                  padding-right: 0px;
                                  padding-bottom: 10px;
                                  padding-left: 0px;
                                  word-break: break-word;
                                  padding-top: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="
                                    line-height: inherit;
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    border-top: 1px solid #dddddd;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody style="line-height: inherit">
                                    <tr
                                      style="
                                        line-height: inherit;
                                        border-collapse: collapse;
                                        vertical-align: top;
                                      "
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          line-height: inherit;
                                          border-collapse: collapse;
                                          word-break: break-word;
                                          vertical-align: top;
                                        "
                                        valign="top"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          style="
                            color: #555555;
                            font-family: Arial, Helvetica Neue, Helvetica,
                              sans-serif;
                            line-height: 1.2;
                            padding-top: 0px;
                            padding-right: 0px;
                            padding-bottom: 10px;
                            padding-left: 0px;
                          "
                        >
                          <p
                            style="
                              line-height: inherit;
                              font-family: Arial, Helvetica Neue,
                                Helvetica, sans-serif;
                              font-size: 16px;
                              padding-left: 10px;
                              padding-right: 10px;
                              font-weight: bold;
                              padding-top: 0;
                              margin-top: 0;
                              margin-bottom: 0;
                              color: #565656;
                              padding-bottom: 0;
                            "
                          >
                            ${detailTitle}
                          </p>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="
                              line-height: inherit;
                              table-layout: fixed;
                              vertical-align: top;
                              border-spacing: 0;
                              border-collapse: collapse;
                              min-width: 100%;
                            "
                            valign="top"
                            width="100%"
                          >
                            <tbody style="line-height: inherit">
                              <tr
                                style="
                                  line-height: inherit;
                                  border-collapse: collapse;
                                  vertical-align: top;
                                "
                                valign="top"
                              >
                                <td
                                  style="
                                    line-height: inherit;
                                    border-collapse: collapse;
                                    min-width: 100%;
                                    vertical-align: top;
                                    padding-right: 0px;
                                    padding-bottom: 10px;
                                    padding-left: 0px;
                                    word-break: break-word;
                                    padding-top: 10px;
                                  "
                                  valign="top"
                                >
                                  <table
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      line-height: inherit;
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      border-top: 1px solid #dddddd;
                                      width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody style="line-height: inherit">
                                      <tr
                                        style="
                                          line-height: inherit;
                                          border-collapse: collapse;
                                          vertical-align: top;
                                        "
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            line-height: inherit;
                                            border-collapse: collapse;
                                            word-break: break-word;
                                            vertical-align: top;
                                          "
                                          valign="top"
                                        >
                                          &nbsp;
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="
                              line-height: inherit;
                              vertical-align: top;
                              border-collapse: collapse;
                            "
                            width="100%"
                          >
                            <tbody>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    width: 100px;
                                    white-space: nowrap;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      margin-left: 5px;
                                      color: #b9bcc0;
                                    "
                                    >Pick up:</span
                                  >
                                </td>
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      font-weight: bold;
                                      color: #9c9ea6;
                                    "
                                    >${enquiry?.zipInfo?.source?.state},
                                    ${enquiry?.zipInfo?.source?.state_abbreviation}
                                    ${enquiry?.zipInfo?.source?.zipcode}</span
                                  >
                                </td>
                              </tr>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  colspan="2"
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      line-height: inherit;
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      min-width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody style="line-height: inherit">
                                      <tr
                                        style="
                                          line-height: inherit;
                                          border-collapse: collapse;
                                          vertical-align: top;
                                        "
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            line-height: inherit;
                                            border-collapse: collapse;
                                            min-width: 100%;
                                            vertical-align: top;
                                            padding-right: 0px;
                                            padding-bottom: 10px;
                                            padding-left: 0px;
                                            word-break: break-word;
                                            padding-top: 10px;
                                          "
                                          valign="top"
                                        >
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              line-height: inherit;
                                              table-layout: fixed;
                                              vertical-align: top;
                                              border-spacing: 0;
                                              border-collapse: collapse;
                                              border-top: 1px solid
                                                #dddddd;
                                              width: 100%;
                                            "
                                            valign="top"
                                            width="100%"
                                          >
                                            <tbody
                                              style="line-height: inherit"
                                            >
                                              <tr
                                                style="
                                                  line-height: inherit;
                                                  border-collapse: collapse;
                                                  vertical-align: top;
                                                "
                                                valign="top"
                                              >
                                                <td
                                                  style="
                                                    line-height: inherit;
                                                    border-collapse: collapse;
                                                    word-break: break-word;
                                                    vertical-align: top;
                                                  "
                                                  valign="top"
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    width: 100px;
                                    white-space: nowrap;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      margin-left: 5px;
                                      color: #b9bcc0;
                                    "
                                    >Delivery:</span
                                  >
                                </td>
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      font-weight: bold;
                                      color: #9c9ea6;
                                    "
                                    >${enquiry?.zipInfo?.destination?.state},
                                    ${enquiry?.zipInfo?.destination?.state_abbreviation}
                                    ${enquiry?.zipInfo?.destination?.zipcode}</span
                                  >
                                </td>
                              </tr>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  colspan="2"
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      line-height: inherit;
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      min-width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody style="line-height: inherit">
                                      <tr
                                        style="
                                          line-height: inherit;
                                          border-collapse: collapse;
                                          vertical-align: top;
                                        "
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            line-height: inherit;
                                            border-collapse: collapse;
                                            min-width: 100%;
                                            vertical-align: top;
                                            padding-right: 0px;
                                            padding-bottom: 10px;
                                            padding-left: 0px;
                                            word-break: break-word;
                                            padding-top: 10px;
                                          "
                                          valign="top"
                                        >
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              line-height: inherit;
                                              table-layout: fixed;
                                              vertical-align: top;
                                              border-spacing: 0;
                                              border-collapse: collapse;
                                              border-top: 1px solid
                                                #dddddd;
                                              width: 100%;
                                            "
                                            valign="top"
                                            width="100%"
                                          >
                                            <tbody
                                              style="line-height: inherit"
                                            >
                                              <tr
                                                style="
                                                  line-height: inherit;
                                                  border-collapse: collapse;
                                                  vertical-align: top;
                                                "
                                                valign="top"
                                              >
                                                <td
                                                  style="
                                                    line-height: inherit;
                                                    border-collapse: collapse;
                                                    word-break: break-word;
                                                    vertical-align: top;
                                                  "
                                                  valign="top"
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    width: 100px;
                                    white-space: nowrap;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      margin-left: 5px;
                                      color: #b9bcc0;
                                    "
                                    >Vehicle:</span
                                  >
                                </td>
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      font-weight: bold;
                                      color: #9c9ea6;
                                    "
                                    >${enquiry?.vehicleInfo?.year},
                                    ${enquiry?.vehicleInfo?.model?.make}
                                    ${enquiry?.vehicleInfo?.model?.model}</span
                                  >
                                </td>
                              </tr>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  colspan="2"
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      line-height: inherit;
                                      table-layout: fixed;
                                      vertical-align: top;
                                      border-spacing: 0;
                                      border-collapse: collapse;
                                      min-width: 100%;
                                    "
                                    valign="top"
                                    width="100%"
                                  >
                                    <tbody style="line-height: inherit">
                                      <tr
                                        style="
                                          line-height: inherit;
                                          border-collapse: collapse;
                                          vertical-align: top;
                                        "
                                        valign="top"
                                      >
                                        <td
                                          style="
                                            line-height: inherit;
                                            border-collapse: collapse;
                                            min-width: 100%;
                                            vertical-align: top;
                                            padding-right: 0px;
                                            padding-bottom: 10px;
                                            padding-left: 0px;
                                            word-break: break-word;
                                            padding-top: 10px;
                                          "
                                          valign="top"
                                        >
                                          <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              line-height: inherit;
                                              table-layout: fixed;
                                              vertical-align: top;
                                              border-spacing: 0;
                                              border-collapse: collapse;
                                              border-top: 1px solid
                                                #dddddd;
                                              width: 100%;
                                            "
                                            valign="top"
                                            width="100%"
                                          >
                                            <tbody
                                              style="line-height: inherit"
                                            >
                                              <tr
                                                style="
                                                  line-height: inherit;
                                                  border-collapse: collapse;
                                                  vertical-align: top;
                                                "
                                                valign="top"
                                              >
                                                <td
                                                  style="
                                                    line-height: inherit;
                                                    border-collapse: collapse;
                                                    word-break: break-word;
                                                    vertical-align: top;
                                                  "
                                                  valign="top"
                                                >
                                                  &nbsp;
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr
                                style="
                                  line-height: inherit;
                                  vertical-align: top;
                                  border-collapse: collapse;
                                "
                              >
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                    width: 100px;
                                    white-space: nowrap;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      margin-left: 5px;
                                      color: #b9bcc0;
                                    "
                                    >Transport type:</span
                                  >
                                </td>
                                <td
                                  style="
                                    line-height: inherit;
                                    vertical-align: top;
                                    border-collapse: collapse;
                                  "
                                >
                                  <span
                                    style="
                                      line-height: inherit;
                                      font-size: 12px;
                                      font-weight: bold;
                                      color: #9c9ea6;
                                    "
                                    >${enquiry?.transportType}</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>`;

// const mailTransport = nodemailer.createTransport({
//   host: "smtpout.secureserver.net",
//   secure: true,
//   secureConnection: false, // TLS requires secureConnection to be false
//   tls: {
//       ciphers:'SSLv3'
//   },
//   requireTLS:true,
//   port: 465,
//   debug: true,
//   auth: {
//       user: "put your godaddy hosted email here",
//       pass: "put your email password here"
//   }
// });

export const sendCustomEmail = ({ to, subject, html, from }: TSendCustom) => {
  return new Promise((res, rej) => {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      // secure: process.env.SMTP_SECURE,
      secureConnection: Boolean(process.env.SMTP_SECURE),
      secure: false,
    });

    // Define the email options
    let mailOptions = {
      from,
      //   from: "test <noreply.test@gmail.com>", // Sender address
      to, // List of receivers
      subject,
      html,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error) => {
      //info
      if (error) {
        rej(error);
        return console.log(error);
      }
      res("OK");
      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};

export default factories.createCoreController(
  "api::enquiry.enquiry",
  ({ strapi }) => ({
    async create(ctx) {
      const enqNumber = Math.floor(
        Math.random() * (999999 - 100000 + 1) + 100000
      );
      const body = { ...ctx.request.body, enquiry_number: enqNumber };

      const created = await strapi.entityService.create(
        "api::enquiry.enquiry",
        {
          data: body,
        }
      );

      const Model = `${body.vehicleInfo?.model?.make} ${body.vehicleInfo?.model?.original_model}`;

      await sendCustomEmail({
        from: process.env.SMTP_EMAIL,
        to: body.dateInfo?.email,
        subject: `Car Shipping Quote #${enqNumber} for your ${Model}`,
        html: HTMLTemplate({
          header: `Car Shipping Quote #<span
              style="line-height: inherit; color: #437ad9"
              >${enqNumber}</span
            >
            for your ${body.vehicleInfo?.model?.make}
            ${body.vehicleInfo?.model?.original_model}`,
          enquiry: body,
          redirectHead:`View Your Quote`,
          detailTitle:`Summary for Quote: #${enqNumber}`,
          enqid: created.id,
        }),
      });

      // try {
      //   await strapi
      //     .plugin("email")
      //     .service("email")
      //     .send({
      //       from: process.env.SMTP_EMAIL,
      //       to: body.dateInfo?.email,
      //       subject: `Car Shipping Quote #${enqNumber} for your ${Model}`,
      //       html: HTMLTemplate({
      //         header: `Car Shipping Quote #<span
      //         style="line-height: inherit; color: #437ad9"
      //         >${enqNumber}</span
      //       >
      //       for your ${body.vehicleInfo?.model?.make}
      //       ${body.vehicleInfo?.model?.original_model}`,
      //         enquiry: body,
      //         enqid: created.id,
      //       }),
      //     });
      //   console.log("mail sent");
      // } catch (error) {
      //   console.log("mail send error->", error);
      // }
      return created;
    },
  })
);
