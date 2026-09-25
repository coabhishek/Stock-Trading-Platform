import React from "react";

function Brokerage() {
  return (
    <div className="container p-5">
      <h3>Charges explained</h3>
      <div className="row">
        <div className="col-6">
          <p className="fs-6 pt-4">Securities/Commodities transaction tax</p>
          <p className="fs-6 pt-4">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="fs-6 pt-4">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="fs-6 pt-4">Transaction/Turnover Charges</p>
          <p className="fs-6 pt-4">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="fs-6 pt-4">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022. BSE has revised transaction charges in M, MT, TS
            and MS groups to ₹275 per crore of gross turnover.
          </p>
          <p className="fs-6 pt-4">
            Call & trade Additional charges of ₹50 per order for orders placed
            through a dealer at Zerodha including auto square off orders. Stamp
            charges Stamp charges by the Government of India as per the Indian
            Stamp Act of 1899 for transacting in instruments on the stock
            exchanges and depositories. NRI brokerage charges For a non-PIS
            account, 0.5% or ₹50 per executed order for equity and F&O
            (whichever is lower). For a PIS account, 0.5% or ₹200 per executed
            order for equity (whichever is lower). ₹500 + GST as yearly account
            maintenance charges (AMC) charges. Account with debit balance
            Accounts with a debit balance will be charged an additional ₹20 per
            executed order. Charges for Investor's Protection Fund Trust (IPFT)
            by NSE Equity and Futures - ₹0.01 per crore + GST of the traded
            value. Options - ₹0.01 per crore + GST traded value (premium value).
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </p>
        </div>

        <div className="col-6">
          <p className="fs-6 pt-4">Securities/Commodities transaction tax</p>
          <p className="fs-6 pt-4">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="fs-6 pt-4">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="fs-6 pt-4">Transaction/Turnover Charges</p>
          <p className="fs-6 pt-4">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="fs-6 pt-4">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022. BSE has revised transaction charges in M, MT, TS
            and MS groups to ₹275 per crore of gross turnover.
          </p>
          <p className="fs-6 pt-4">
            Call & trade Additional charges of ₹50 per order for orders placed
            through a dealer at Zerodha including auto square off orders. Stamp
            charges Stamp charges by the Government of India as per the Indian
            Stamp Act of 1899 for transacting in instruments on the stock
            exchanges and depositories. NRI brokerage charges For a non-PIS
            account, 0.5% or ₹50 per executed order for equity and F&O
            (whichever is lower). For a PIS account, 0.5% or ₹200 per executed
            order for equity (whichever is lower). ₹500 + GST as yearly account
            maintenance charges (AMC) charges. Account with debit balance
            Accounts with a debit balance will be charged an additional ₹20 per
            executed order. Charges for Investor's Protection Fund Trust (IPFT)
            by NSE Equity and Futures - ₹0.01 per crore + GST of the traded
            value. Options - ₹0.01 per crore + GST traded value (premium value).
            Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </p>
        </div>

        <div className="row">
          <h3 className="fs-4">Disclaimer</h3>
          <p className="fs-6 pt-2">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
