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
            Delivery and Shipping Policy
          </h1>

          <p className="text-muted privacy-para-con">
            Welcome to Infygain Technologies! We strive to provide efficient and
            reliable delivery and shipping services for our valued customers.
          </p>
          {/* Delivery Timeframe */}
          <h2 className="section-headings">Delivery Timeframe</h2>
          <p className="text-muted privacy-para-con">
            Our estimated delivery time is 3-5 business days for domestic orders
            and 7-10 business days for international orders.
          </p>
          <h2 className="section-headings">Shipping Methods</h2>
          <ul className="list-privacy-con text-muted">
            <li className="privacy-para-con ">
              Standard Shipping: We offer standard shipping services through our
              trusted shipping partners.
            </li>
            <li className="privacy-para-con">
              Express Shipping: For urgent orders, we provide express shipping
              options at an additional cost.
            </li>
          </ul>
          <h2 className="section-headings">Shipping Charges</h2>
          <p className="text-muted privacy-para-con">
            Shipping charges are calculated based on the weight and destination
            of the package. The final shipping cost will be displayed during the
            checkout process.
          </p>
          <h2 className="section-headings">Order Tracking</h2>
          <p className="text-muted privacy-para-con">
            Once your order is shipped, we will provide you with a tracking
            number via email. You can use this tracking number to track the
            status of your package on our website or the shipping carrier's
            website.
          </p>
          <h2 className="section-headings">Contact Information</h2>
          <p className="text-muted privacy-para-con">
            If you have any questions or concerns regarding your delivery or
            shipping, please feel free to contact our customer support team:
          </p>
          <ul className="list-privacy-con text-muted">
            <li className="privacy-para-con ">Phone: 99521 41444</li>
            <li className="privacy-para-con">
              Email: info[at]infygain[dot]com
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Delivery;
