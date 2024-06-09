/**
 * enquiry controller
 */

import { factories } from "@strapi/strapi";
const nodemailer = require("nodemailer");

type TSendCustom = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};
// Car Shipping Quote #<span style="line-height:inherit;color:#437ad9">19048841</span> for your Acura Integra</p>
const HTMLTemplate = ({ subject, Quote }) => ` <div
style="
  line-height: inherit;
  margin: 0;
  padding: 0;
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
                        Car Shipping Quote
                           #<span
                            style="line-height: inherit; color: #437ad9"
                            >${Quote}</span 
                          >
                          for your 
                          ${subject}
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
                        <center
                          style="
                            line-height: inherit;
                            margin-top: 10px;
                            margin-bottom: 10px;
                          "
                        >
                          <a
                            href="_blank"
                            style="
                              line-height: inherit;
                              font-size: 18px;
                              font-weight: bold;
                              color: #29b6f6;
                              text-decoration: none;
                            "
                            target="_blank"
                            >View Your Quote &gt;</a
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
                            Summary for Quote #${Quote}
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
                                    >Beverly Hills, CA 90213</span
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
                                    >Osceola, IA 50213</span
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
                                    >Acura Integra</span
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
                                    >Open</span
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
                                    >Vehicle condition:</span
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
                                    >Running</span
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

const sendCustomEmail = ({ to, subject, html }: TSendCustom) => {
  return new Promise((res, rej) => {
    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP server address
      //   service: "gmail", // Replace with your SMTP server address
      port: 587, // Replace with your SMTP server port (usually 587 for TLS, 465 for SSL, or 25 for non-encrypted)
      secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: "yondooo61@gmail.com", // Replace with your email
      //     pass: "Killer951988", // Replace with your email password
      //   },
      auth: {
        user: "yondooo61@gmail.com", // Replace with your email
        // pass: "P@$$2022!-+-+", // Replace with your email password
        pass: "wiij szbz giiw kbrp", // Replace with your email password
        // password: "P@$$2022!-+-+", // Replace with your email password
      },
      tls: { rejectUnauthorized: false },
      //   requireTLS: true,
    });

    // Define the email options
    let mailOptions = {
      from: "Service <noreply.yondooo61@gmail.com", // Sender address
      //   from: "test <noreply.test@gmail.com>", // Sender address
      to: to, // List of receivers
      subject, // Subject line
      //   text, // Plain text body
      html, // HTML body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        rej(error);
        return console.log(error);
      }
      res("OK");
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
};

export default factories.createCoreController(
  "api::enquiry.enquiry",
  ({ strapi }) => ({
    async create(ctx) {
      const generated = Math.floor(
        Math.random() * (999999 - 100000 + 1) + 100000
      );
      const body = { ...ctx.request.body, enquiry_number: generated };

      const created = await strapi.entityService.create(
        "api::enquiry.enquiry",
        {
          data: body,
        }
      );

      const Subject = ` ${body.vehicleInfo?.model?.model} ${body.vehicleInfo?.model?.original_model}`;

      await sendCustomEmail({
        to: body.dateInfo?.email,
        // to: "yondooo33@gmail.com",
        subject: `Car Shipping Quote #${generated} for your ${Subject}`,
        // text: "tex tbody",
        html: HTMLTemplate({ subject: Subject, Quote: generated }),
      });

      //   console.log(responseMail, "---->responseMail");

      // const order = await strapi.entityService.findOne( "api::pageid.pageid", id);
      //   const entries = await strapi.entityService.update(
      //     "api::pageid.pageid",
      //     id,
      //     {
      //       data: ctx.request.body,
      //     }
      //   );

      return created;
    },
  })
);
