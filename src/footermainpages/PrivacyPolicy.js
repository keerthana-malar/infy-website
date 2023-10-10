import '../css/PrivacyPolicy.css';
import React from "react";
import Header from "../common/header";
import Footer from '../common/footer'; 


function PrivacyPolicy() {
    return (
        <>
        <Header/>
   
        <div className='container'>
            <div className="privacy-policy-container">
                <h1 className="privacy-policy-heading">Privacy_Policy</h1>
                <p className='text-muted privacy-para-con'>
                    Infygain Technologies knows that you care how information about you is
                    used and shared, and we appreciate your trust in us to do that carefully
                    and sensibly. By registering with InfyStore, you are accepting and
                    consenting to the practices described here.
                </p>
                <ul className='list-privacy-con text-muted'>
                    <li className='privacy-para-con '>
                        Any information you provide when placing an order is held in the strictest confidence.
                        When placing an order you are required to provide us with the following information:
                        Name, Billing address, Delivery address, Contact number, E-mail address for confirmation of
                        the order. This information is used for delivery, billing purposes, latest offers, promotions and to fulfil your order.
                    </li>
                    <li className='privacy-para-con'>
                        Any personal information provided to or to be gathered by InfyStore is controlled primarily by Infygain Technologies.
                    </li>
                </ul>
                <p className='text-muted privacy-para-con'>Access to and use of password protected and / or secure areas of this website are restricted to authorized visitors only. Unauthorized visitors attempting to access these areas of the website may be subject to legal action.</p>


                {/* section1 */}

                <h2 className="section-headings">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
                <p className='text-muted privacy-para-con'>
                    When you purchase something from our store, as part of the buying and
                    selling process, we collect the personal information you give us such as
                    your name, address, and email address.
                </p>
                <p className='text-muted privacy-para-con'>
                    When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide
                    us with information that helps us learn about your browser and operating system.
                </p>
                <p className='text-muted privacy-para-con'>
                    Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.
                </p>

                {/* section2 */}

                <h2 className="section-headings">SECTION 2 - CONSENT</h2>
                <p className='text-muted privacy-para-con'>
                    How do you get my consent?
                </p>
                <p className='text-muted privacy-para-con'>
                    When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase,
                    we imply that you consent to our collecting it and using it for that specific reason only.
                </p>
                <p className='text-muted privacy-para-con'>
                    If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your
                    expressed consent, or provide you with an opportunity to say no.
                </p>
                <p className='text-muted privacy-para-con'>
                    How do I withdraw my consent?
                </p>
                <p className='text-muted privacy-para-con'>
                    If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at info@infygain.com or mailing us at:
                    hari complex opp.prozone mall, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035              </p>
                {/* section3*/}

                <h2 className="section-headings">SECTION 3 - DISCLOSURE</h2>
                <p className='text-muted privacy-para-con'>
                    We may disclose your personal information if we are required by
                    law to do so or if you violate our Terms of Service.
                </p>
                {/* section4*/}

                <h2 className="section-headings">SECTION 4 - PAYMENT</h2>
                <p className='text-muted privacy-para-con'>
                    We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers.
                    The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only usedsar as long as is necessary to complete your purchase transaction.
                    After that is complete, your purchase transaction information is not saved.
                </p>
                <p className='text-muted privacy-para-con'>
                    Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa,
                    MasterCard, American Express and Discover.
                </p>
                <p className='text-muted privacy-para-con'>
                    PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
                </p>
                <p className='text-muted privacy-para-con'>
                    For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com
                </p>
                {/* section5*/}

                <h2 className="section-headings">SECTION 5 - THIRD-PARTY SERVICES</h2>
                <p className='text-muted privacy-para-con'>
                    In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to
                    allow them to perform the services they provide to us.

                </p>
                <p className='text-muted privacy-para-con'>
                    However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to
                    the information we are required to provide to them for your purchase-related transactions.

                </p>
                <p className='text-muted privacy-para-con'>
                    For these providers, we recommend that you read their privacy policies so you can understand the manner
                    in which your personal information will be handled by these providers.
                </p>
                <p className='text-muted privacy-para-con'>
                    In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become
                    subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                </p>
                <p className='text-muted privacy-para-con'>
                    Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
                </p>
                {/*links */}

                <h2 className="section-headings">Links</h2>
                <p className='text-muted privacy-para-con'>
                    When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices
                    of other sites and encourage you to read their privacy statements.                </p>
                {/*SECTION 6 */}

                <h2 className="section-headings">SECTION 6 - SECURITY</h2>
                <p className='text-muted privacy-para-con'>
                    To protect your personal information, we take reasonable precautions and follow industry best
                    practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
                </p>
                {/*SECTION 7 */}

                <h2 className="section-headings"> SECTION 7 - COOKIES</h2>
                <p className='text-muted privacy-para-con'>
                    We use cookies to maintain session of your user. It is not used to personally identify you on other websites.
                </p>
                {/*SECTION 8 */}

                <h2 className="section-headings">SECTION 8 - AGE OF CONSENT</h2>
                <p className='text-muted privacy-para-con'>
                    By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence
                    and you have given us your consent to allow any of your minor dependents to use this site.
                </p>
                {/*SECTION 8 */}

                <h2 className="section-headings">SECTION 9 - CHANGES TO THIS PRIVACY POLICY</h2>
                <p className='text-muted privacy-para-con'>
                    We reserve the right to modify this privacy policy at any time, so please review it frequently.
                    Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect,
                    how we use it, and under what circumstances, if any, we use and/or disclose it.
                </p>
                <p className='text-muted privacy-para-con'>
                If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
                </p>
                {/*final */}

                <h2 className="section-headings">QUESTIONS AND CONTACT INFORMATION</h2>
                <p className='text-muted privacy-para-con'>
                    If you would like to: access, correct, amend, or delete any personal
                    information we have about you, register a complaint, or simply want more
                    information, contact our Privacy Compliance Officer at{" "}
                    <a href="mailto:info@infygain.com" className="contact-link">info@infygain.com</a> or by mail at:
                </p>
                <address className="privacy-para-con text-muted">
                    hari complex opp.prozone mall,
                    <br />
                    Sathy Rd, Saravanampatti,
                    <br />
                    Coimbatore, Tamil Nadu 641035
                </address>
            </div>
        </div>
        <Footer/>
        </>
    );
}



export default PrivacyPolicy;

