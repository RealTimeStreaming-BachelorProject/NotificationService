export function packageUpdate(
  message: string,
  packageHistoryURL: string,
  updateDate: string
): string {
  return `
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style type="text/css">
    body {
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      font-family: Helvetica, Arial, sans-serif;
    }
    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    body {
      background-color: #ffffff;
    }
    p {
      margin-top: 5px;
      margin-bottom: 5px;
      line-height: 1.5em;
      color: #4A4A4A;
    }
    p.margin-2 {
      margin-top: 2px;
      margin-bottom: 2px;
    }
    img {
      border: none;
      display: block;
      outline: none;
      text-decoration: none;
      height: auto;
      border: 0;
      line-height: 100%;
    }
    @media only screen and (min-width:480px) {
      .col-100 {
        width: 100% !important;
      }
      .col-66 {
        width: 66% !important;
      }
      .col-50 {
        width: 50% !important;
      }
      .col-33 {
        width: 33% !important;
      }
    }
    .pre-header-text {
      display: none;
      mso-hide: all;
      width: 0px;
      height: 0px;
      max-width: 0px;
      max-height: 0px;
      font-size: 0px;
      line-height: 0px;
    }
    .outermost-table {
      width: 100%;
      table-layout: fixed;
    }
    .container {
      width: 100%;
      max-width: 600px;
    }
    .email-bg-color {
      background-color: #ffffff;
    }
    .company-logo-bg-color {
      background-color: #ffffff;
    }
    .email-main-color-bg {
      background-color: #100c10;
    }
    .white-bg {
      background-color: #FFFFFF;
    }
    .top-logo-img {
      width: 150px;
      height: auto;
    }
    .top-logo {
      padding: 15px 0;
    }
    .main-logo-img {
      width: 200;
      height: auto;
    }
    .bottom-logo-img {
      width: 80px;
      height: auto;
    }
    .font-0 {
      font-size: 0px;
    }
    .top-delimiter {
      border-top: 1px solid #D5DADF;
      padding-top: 20px;
    }
    .main {
      padding: 30px 15px;
    }
    .wrapper {
      padding: 30px 25px;
      margin: 0;
      border-radius: 3px;
    }
    .wrapper-border {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      border: 1px solid #D5DADF;
    }
    .top-padding {
      padding: 30px 0 0 0;
    }
    .center-no-border-table {
      width: 100%;
      cellpadding: 0px;
      cellspacing: 0px;
      align: center;
      border: 0px;
      border-spacing: 0px;
    }
    .center-small-spaced-table {
      width: 100%;
      cellpadding: 0px;
      cellspacing: 0px;
      align: center;
      border: 0px;
      border-spacing: 0 4px;
    }
    .center-spaced-table {
      width: 100%;
      cellpadding: 0px;
      cellspacing: 0px;
      align: center;
      border: 0px;
      border-spacing: 0 12px;
    }
    .no-padding-spacing-table {
      width: 100%;
      cellpadding: 0px;
      cellspacing: 0px;
    }
    .bottom-block {
      font-size: 16px;
      line-height: 25px;
      font-family: Helvetica, Arial, sans-serif;
      color: #9B9B9B;
    }
    .title-block {
      padding: 15px 0 0 0;
      text-transform: uppercase;
      font-size: 30px;
      font-family: Helvetica, Arial, sans-serif;
      color: #100c10;
      font-weight: bold;
    }
    .smiley-title {
      padding: 0 0 20px 0;
      text-transform: uppercase;
      font-size: 16px;
      font-family: Helvetica, Arial, sans-serif;
      color: #4A4A4A;
      font-weight: bold;
    }
    .smiley-wrapper {
      padding: 15px 0;
    }
    .order-detail-wrapper {
      padding-bottom: 15px;
    }
    .order-detail-title {
      color: #000;
      font-size: 13px;
      text-align: left;
      text-transform: uppercase;
    }
    .order-detail-text {
      color: #4A4A4A;
      font-size: 13px;
      text-align: left;
    }
    .order-detail-text.bold {
      color: #4A4A4A;
      font-size: 13px;
      text-align: left;
      font-weight: bold;
    }
    .order-detail-quantity-text {
      color: #9B9B9B;
      font-size: 13px;
      text-align: left;
    }
    .order-detail-canceled-text {
      color: #ED7A6F;
      font-size: 13px;
      text-align: left;
    }
    .order-detail-quantity-short {
      color: #9B9B9B;
      font-size: 13px;
      text-align: left;
      padding-left: 4px;
    }
    .bottom-title-block {
      padding: 10px 0 30px 0;
      font-size: 16px;
      font-family: Helvetica, Arial, sans-serif;
      color: #101010;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .bottom-banner-img {
      border-style: none;
      display: block;
      outline-style: none;
      text-decoration: none;
      height: auto;
      max-width: 100%;
      width: 425px;
    }
    .info-block {
      padding: 25px 0 0 0;
      font-size: 16px;
      color: #4A4A4A;
      font-family: Helvetica, Arial, sans-serif;
    }
    .button-wrapper {
      word-break: break-word;
      padding: 40px 25px 20px 25px;
    }
    .button {
      border-radius: 6px;
      cursor: pointer;
      padding: 10px 25px;
      text-transform: uppercase;
    }
    .button a {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 16px;
      cursor: pointer;
      color: #FFFFFF;
      text-decoration: none;
    }
    .half-column {
      vertical-align: top;
      display: inline-block;
      direction: ltr;
      font-size: 13px;
      text-align: left;
      width: 100%;
    }
    .align-middle {
      vertical-align: middle;
    }
    .social {
      padding-bottom: 20px;
      margin: 0 7.5px;
    }
    .facebook-logo-img {
      width: 30px;
    }
    .twitter-logo-img {
      width: 30px;
    }
    .instagram-logo-img {
      width: 30px;
    }
    .snapchat-logo-img {
      width: 30px;
    }
    .youtube-logo-img {
      width: 30px;
    }
    .linkedin-logo-img {
      width: 30px;
    }
    .pinterest-logo-img {
      width: 30px;
    }
    .custom1-logo-img {
      width: px;
    }
    .custom2-logo-img {
      width: px;
    }
  </style>
  <style>
    .bottom-logo-img {
      width: 80px;
    }
    .bottom-title-block {
      color: #101010;
    }
    .bottom-banner-img {
      width: 425px;
    }
  </style>

  <!--[if mso]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  <![endif]-->

  <!--[if lte mso 11]>
    <style type="text/css">
      .outlook-group-fix {
        width:100% !important;
      }
    </style>
  <![endif]-->
</head>
<body style="height:100% !important;margin-top:0 !important;margin-bottom:0 !important;margin-right:0 !important;margin-left:0 !important;padding-top:0 !important;padding-bottom:0 !important;padding-right:0 !important;padding-left:0 !important;width:100% !important;font-family:Helvetica, Arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">

  <!-- HIDDEN PREHEADER TEXT -->
  <div class="pre-header-text" style="display:none;mso-hide:all;width:0px;height:0px;max-width:0px;max-height:0px;font-size:0px;line-height:0px;">${message}</div>

  <!--
  CONTENT -->
  <table cellpadding="0" cellspacing="0" border="0" class="outermost-table" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;table-layout:fixed;">

    <!-- TOP LOGO -->
    <tbody><tr>
      <td align="center" class="company-logo-bg-color" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#ffffff;">
        <table cellpadding="0" cellspacing="0" border="0" align="center" class="container" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;max-width:600px;">
          <tbody>
        </tbody></table>
      </td>
    </tr>

    <!-- MAIN -->
    <tr>
      <td align="center" class="main email-bg-color" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#ffffff;padding-top:30px;padding-bottom:30px;padding-right:15px;padding-left:15px;">

        <!--[if (gte mso 9)|(IE)]>
          <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
            <tr>
              <td style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
              <![endif]-->
        <table cellpadding="0" cellspacing="0" border="0" align="center" class="container" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;max-width:600px;">

          <!-- MAIN WRAPPER -->
          <tbody><tr>
            <td class="wrapper wrapper-border white-bg" align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#FFFFFF;padding-top:30px;padding-bottom:30px;padding-right:25px;padding-left:25px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,0.08);border-width:1px;border-style:solid;border-color:#D5DADF;">
              <table cellpadding="0" cellspacing="0" align="center" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                <tbody><tr>
                  <td align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                    <table cellpadding="0" cellspacing="0" align="center" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody><tr>
                        <td style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                          <img height="auto" src="https://shipup-assets.s3.eu-west-1.amazonaws.com/companies/peak-design-c7a3c/company_assets/main-1525478396.png" width="200" class="main-logo-img" style="border-style:none;display:block;outline-style:none;text-decoration:none;border-width:0;line-height:100%;width:200;height:auto;">
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                    <table cellpadding="0" cellspacing="0" align="center" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody><tr>
                        <td class="title-block" align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-top:15px;padding-bottom:0;padding-right:0;padding-left:0;text-transform:uppercase;font-size:30px;font-family:Helvetica, Arial, sans-serif;color:#100c10;font-weight:bold;">YOUR PACKAGE IS MOVING</td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                    <table cellpadding="0" cellspacing="0" align="center" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody><tr>
                        <td class="info-block" align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-top:25px;padding-bottom:0;padding-right:0;padding-left:0;font-size:16px;color:#4A4A4A;font-family:Helvetica, Arial, sans-serif;">${message}</td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="button-wrapper" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;word-break:break-word;padding-top:40px;padding-bottom:20px;padding-right:25px;padding-left:25px;">
                    <table cellpadding="0" cellspacing="0" align="center" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody><tr>
                        <td align="center" valign="middle" class="button email-main-color-bg" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#100c10;border-radius:6px;cursor:pointer;padding-top:10px;padding-bottom:10px;padding-right:25px;padding-left:25px;text-transform:uppercase;">
                          <a href="${packageHistoryURL}" target="_blank" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:Helvetica, Arial, sans-serif;font-size:16px;cursor:pointer;color:#FFFFFF;text-decoration:none;">Package History</a>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- PICKUP WRAPPER -->

          <!-- LINE ITEMS WRAPPER -->
          <tr>
            
          </tr>

          <!-- ORDER INFO WRAPPER -->
          <tr>
            <td class="top-padding" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-top:30px;padding-bottom:0;padding-right:0;padding-left:0;">
              <table cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                <tbody><tr>
                  <td class="white-bg wrapper wrapper-border" align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#FFFFFF;padding-top:30px;padding-bottom:30px;padding-right:25px;padding-left:25px;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;border-radius:3px;box-shadow:0 1px 3px rgba(0,0,0,0.08);border-width:1px;border-style:solid;border-color:#D5DADF;">
                    <table width="100%" align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody>
                      <tr>
                        <td class="font-0 top-delimiter" align="center" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                          <div class="col-33 outlook-group-fix half-column align-middle" style="display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;vertical-align:middle;">
                            <table cellpadding="0" cellspacing="0" width="100%" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                              <tbody><tr>
                                <td class="order-detail-wrapper" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-bottom:15px;padding-right:0;padding-left:0;">
                                  <table cellpadding="0" cellspacing="0" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                    <tbody><tr>
                                      <td style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                        <img alt="carrier-logo" height="auto" src="https://www.freelogodesign.org/file/app/client/thumb/670eb6a2-3a2e-4fa9-bcb2-1e5969212779_200x200.png?1614423508080" width="100" style="border-style:none;display:block;outline-style:none;text-decoration:none;height:auto;border-width:0;line-height:100%;margin-left: auto;margin-right: auto;/* width: 50%; */">
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                          <div class="col-66 outlook-group-fix half-column align-middle" style="display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;vertical-align:middle;">
                            <table cellpadding="0" cellspacing="0" width="100%" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                              <tbody><tr>
                                <td class="order-detail-wrapper" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-bottom:15px;padding-right:0;padding-left:0;">
                                  <table cellpadding="0" cellspacing="0" border="0" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                    <tbody><tr>
                                      <td style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                        <div class="order-detail-title" style="color:#000;font-size:13px;font-weight:bold;text-transform:uppercase;">postglobal</div>
                                        <p class="order-detail-text" style="margin-top:5px;margin-bottom:5px;line-height:1.5em;color:#4A4A4A;font-size:13px;">Update Received: ${updateDate}</p>
                                      </td>
                                    </tr>
                                  </tbody></table>
                                </td>
                              </tr>
                            </tbody></table>
                          </div>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>

          <!-- PROMO WRAPPER -->
          <tr>
            
          </tr>
        </tbody></table>

        <!--[if (gte mso 9)|(IE)]>
              </td>
            </tr>
          </table>
        <![endif]-->

        <!-- FOOTER -->
        <table cellpadding="0" cellspacing="0" border="0" align="center" class="container top-padding" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;max-width:600px;padding-top:30px;padding-bottom:0;padding-right:0;padding-left:0;">
          <tbody>
          <tr>
            <td align="center" class="bottom-block" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;font-size:16px;line-height:25px;font-family:Helvetica, Arial, sans-serif;color:#9B9B9B;">© 2021 Real Time Bachelor
              <br>All rights reserved, y'all.
              <br>
            </td>
          </tr>
        </tbody></table>
      </td>
    </tr>
  </tbody></table>
</body></html>
    `;
}
