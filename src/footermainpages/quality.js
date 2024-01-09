import "../css/PrivacyPolicy.css";
import React from "react";

import Header from "../common/header";
import Footer from "../common/footer";

function Quality() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="privacy-policy-container">
          <h1 className="privacy-policy-heading">Quality Policy</h1>

          <p className="text-muted privacy-para-con">
            Welcome to Infygain Technologies! We are committed to delivering
            high-quality products and services to our customers.
          </p>
          <h2 className="section-headings">Customer Satisfaction</h2>
          <p className="text-muted privacy-para-con">
            Our top priority is customer satisfaction. We strive to understand
            our customers' needs and provide solutions that exceed their
            expectations.
          </p>
          <h2 className="section-headings">Continuous Improvement</h2>
          <p className="text-muted privacy-para-con">
            We believe in continuously improving our processes, products, and
            services. We regularly review and enhance our quality management
            systems to ensure effectiveness and efficiency.
          </p>
          <h2 className="section-headings">Quality Control</h2>
          <p className="text-muted privacy-para-con">
            We have implemented stringent quality control measures to ensure
            that our products meet the highest standards. Our dedicated quality
            assurance team conducts thorough testing and inspections throughout
            the production process.
          </p>
          <h2 className="section-headings">Employee Training</h2>
          <p className="text-muted privacy-para-con">
            We invest in the training and development of our employees to
            enhance their skills and knowledge. This enables them to contribute
            effectively to our quality objectives and deliver excellence in
            their work.
          </p>
          <h2 className="section-headings">Compliance with Regulations</h2>
          <p className="text-muted privacy-para-con">
            We are committed to complying with all applicable laws, regulations,
            and industry standards. Our quality management systems are designed
            to meet or exceed the requirements set forth by relevant
            authorities.
          </p>
          <h2 className="section-headings">Contact Information</h2>
          <p className="text-muted privacy-para-con">
            If you have any questions or concerns regarding our quality policy
            or need further assistance, please feel free to contact our customer
            support team:
          </p>
          <ul className="list-privacy-con text-muted">
            <li className="privacy-para-con ">
              Refund requests must be submitted within seven (7) calendar days
              from the date of purchase.
            </li>
            <li className="privacy-para-con">Phone: 99521 41444</li>
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

export default Quality;
