import "../css/PrivacyPolicy.css";
import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

function Delivery() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="privacy-policy-container">
          <h1 className="privacy-policy-heading">
            Refund and Cancellation Policy
          </h1>

          <p className="text-muted privacy-para-con">
            At Infygain Technologies, we value our customers and want to ensure
            your satisfaction with our products and services. This Refund and
            Cancellation Policy outlines the terms and conditions for requesting
            a refund or canceling an order placed on our website.
          </p>

          <h2 className="section-headings">Refund Eligibility</h2>
          <p className="text-muted privacy-para-con">
            1.1. Refunds are available for products and services that meet the
            following criteria:
          </p>
          <ul className="list-privacy-con text-muted">
            <li className="privacy-para-con ">
              Refund requests must be submitted within seven (7) calendar days
              from the date of purchase.
            </li>
            <li className="privacy-para-con">
              The product or service must be unused, unopened, and in its
              original condition.
            </li>
            <li className="privacy-para-con">
              A valid proof of purchase, such as an order confirmation or
              receipt, must accompany the refund request.
            </li>
          </ul>
          <p className="text-muted privacy-para-con">
            1.2. Some products or services may have additional eligibility
            criteria or specific refund terms mentioned on their respective
            pages. In such cases, the specific terms will take precedence.
          </p>

          <h2 className="section-headings">Cancellation Policy</h2>
          <p className="text-muted privacy-para-con">
            2.1. If you wish to cancel an order, please contact our customer
            support team via [contact information] as soon as possible,
            providing the following details:
          </p>
          <ul className="list-privacy-con text-muted">
            <li className="privacy-para-con ">
              Your name and contact information.
            </li>
            <li className="privacy-para-con">
              Order number and date of purchase.
            </li>
            <li className="privacy-para-con">Reason for cancellation.</li>
          </ul>
          <p className="text-muted privacy-para-con">
            2.2. Please note that we cannot guarantee the cancellation of an
            order if it has already been processed, shipped, or fulfilled. In
            such cases, you may need to follow the refund process outlined in
            Section 1.
          </p>
          <h2 className="section-headings">Refund and Cancellation Process</h2>
          <p className="text-muted privacy-para-con">
            3.1. To request a refund or cancellation, please contact our
            customer support team using the provided contact information. We
            will review your request and may require additional information or
            clarification.
          </p>
          <p className="text-muted privacy-para-con">
            3.2. If your refund request or order cancellation is approved, we
            will process the refund within [number of days] using the original
            payment method used for the purchase. Please note that the time
            taken for the refund to be reflected in your account may vary
            depending on your payment provider.
          </p>
          <h2 className="section-headings">Non-Refundable Items</h2>
          <p className="text-muted privacy-para-con">
            4.1. The following items are generally non-refundable:
          </p>
          <ul className="list-privacy-con text-muted">
            <li className="privacy-para-con ">
              Downloadable digital products, such as e-books, software, or
              digital vouchers, once they have been accessed or downloaded.{" "}
            </li>
            <li className="privacy-para-con">
              Products or services that have been personalized or customized
              specifically for you.{" "}
            </li>
            <li className="privacy-para-con">Reason for cancellation.</li>
            <li className="privacy-para-con">
              Services that have been fully rendered or provided.{" "}
            </li>
          </ul>
          <p className="text-muted privacy-para-con">
            4.2. Exceptions to these non-refundable items may be made on a
            case-by-case basis, at our sole discretion.
          </p>
          <h2 className="section-headings">
            Changes to the Refund and Cancellation Policy
          </h2>
          <p className="text-muted privacy-para-con">
            5.1. We reserve the right to modify or update this Refund and
            Cancellation Policy at any time. Any changes will be effective
            immediately upon posting the updated policy on our website. It is
            your responsibility to review this policy periodically for any
            changes.
          </p>
          <h2 className="section-headings">Contact Us</h2>
          <p className="text-muted privacy-para-con">
            If you have any questions or concerns regarding our Refund and
            Cancellation Policy, please contact our customer support team via
            [contact information].
          </p>
          <p className="text-muted privacy-para-con">
            Please note that this Refund and Cancellation Policy applies only to
            purchases made directly from our website. If you purchased our
            products or services through a third-party retailer, you will need
            to refer to their refund and cancellation policy for further
            information.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Delivery;
