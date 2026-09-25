import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container text-muted footer-container">
        <div className="footer-list-sec">
          <div className="row">
            <div className="col-3 footer-chile-container">
              <img
                src="/imgs/logo.svg"
                alt="logo_img"
                style={{ width: "60%", paddingInline: "14px" }}
              />
              <p className="p-3">
                © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
              </p>
              <div>
                <span className="footer-socials-icon">
                  <i class="fa-brands fa-twitter"></i>
                </span>
                <span className="footerfooter-socials-icon-socials-icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </span>
                <span className="footer-socials-icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </span>
                <span className="footer-socials-icon">
                  <i class="fa-brands fa-square-instagram"></i>
                </span>
              </div>

              <hr />
              <div>
                <span className="footer-socials-icon">
                  <i class="fa-brands fa-youtube"></i>
                </span>
                <span className="footer-socials-icon">
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
                <span className="footer-socials-icon">
                  <i class="fa-brands fa-telegram"></i>
                </span>
              </div>

              <div className="mt-4">
                <img
                  src="imgs/googlePlayBadge.svg"
                  alt="footer-img"
                  className="p-1"
                />
                <img
                  src="imgs/appstoreBadge.svg"
                  alt="footer_img"
                  className="p-1"
                />
              </div>
            </div>

            <div className="col-2 footer-chile-container">
              <h5 className="footer-listing-heading pt-2">Account</h5>
              <ul className="footer-lists">
                <li className="mt-3">Open demat account</li>
                <li className="mt-3">Minor demat account</li>
                <li className="mt-3">NRI demat account</li>
                <li className="mt-3">HUF demat account</li>
                <li className="mt-3">Commodity</li>
                <li className="mt-3">Dematerialisation</li>
                <li className="mt-3">Fund transfer</li>
                <li className="mt-3">MTF</li>
              </ul>
            </div>

            <div className="col-2 footer-chile-container">
              <h5 className="footer-listing-heading pt-2">Support</h5>
              <ul className="footer-lists">
                <li className="mt-3">Contact us</li>
                <li className="mt-3">Support portal</li>
                <li className="mt-3">How to file a complaint?</li>
                <li className="mt-3">Status of your complaints</li>
                <li className="mt-3">Bulletin</li>
                <li className="mt-3">Circular</li>
                <li className="mt-3">Z-Connect blog</li>
                <li className="mt-3">Downloads</li>
              </ul>
            </div>

            <div className="col-2 footer-chile-container">
              <h5 className="footer-listing-heading pt-2">Company</h5>
              <ul className="footer-lists">
                <li className="mt-3">About</li>
                <li className="mt-3">Philosophy</li>
                <li className="mt-3">Press & media</li>
                <li className="mt-3">Careers</li>
                <li className="mt-3">Zerodha Cares (CSR)</li>
                <li className="mt-3">Zerodha.tech</li>
                <li className="mt-3">Open source</li>
                <li className="mt-3">Referral program</li>
              </ul>
            </div>

            <div className="col-3 footer-chile-container">
              <h5 className="footer-listing-heading pt-2">Quick links</h5>
              <ul className="footer-lists">
                <li className="mt-3">Upcoming IPOs</li>
                <li className="mt-3">Brokerage charges</li>
                <li className="mt-3">Market holidays</li>
                <li className="mt-3">Economic calendar</li>
                <li className="mt-3">Markets</li>
                <li className="mt-3">Calculators</li>
                <li className="mt-3">Sectors</li>
                <li className="mt-3">Gift Nifty</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-list-sec">
          <p className="footer-para">
            Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Limited – SEBI Registration no.:
            IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address:
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p className="footer-para">
            Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on
            SCORES portal & SMARTODR. Mandatory details for filing complaints on
            SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of grievances
          </p>
          <p className="footer_ka_a">
            <a href="#">Smart Online Dispute Resolution</a>&nbsp;&nbsp; ||
            &nbsp; &nbsp;
            <a href="#">Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="footer-para">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="footer-para">
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p className="footer-para">
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>
          <p className="footer-para">
            {" "}
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
          <p className="footer-para">
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}
