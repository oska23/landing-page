// src/components/TermsOfUse.js
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="pt-24 pb-12 px-4 bg-snap-light">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-snap-dark">Terms of Use</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              1. Introduction
            </h2>
            <p className="text-snap-gray mb-4">
              Welcome to iibsy. These Terms of Use govern your use of our
              website and services. By accessing or using our platform, you
              agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              2. Accounts and Membership
            </h2>
            <p className="text-snap-gray mb-4">
              If you create an account on our platform, you are responsible for
              maintaining the security of your account and for all activities
              that occur under your account. You must immediately notify us of
              any unauthorized uses of your account or any other breaches of
              security. We will not be liable for any acts or omissions by you,
              including any damages of any kind incurred as a result of such
              acts or omissions.
            </p>
            <p className="text-snap-gray mb-4">
              To access certain features of the platform, you may be required to
              provide information about yourself as part of the registration
              process. You agree that any information you provide will always be
              accurate, correct, and up to date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              3. Purchases and Payments
            </h2>
            <p className="text-snap-gray mb-4">
              Our platform allows you to purchase products from various vendors.
              By making a purchase, you agree to provide accurate and complete
              information about yourself and your payment method. We reserve the
              right to refuse or cancel your order if fraud or an unauthorized
              or illegal transaction is suspected.
            </p>
            <p className="text-snap-gray mb-4">
              Prices for products are subject to change without notice. We
              reserve the right to discontinue any products at any time. We
              shall not be liable to you or to any third-party for any
              modification, price change, suspension, or discontinuance of any
              product.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              4. User Content
            </h2>
            <p className="text-snap-gray mb-4">
              Our service allows you to post, link, store, share, and otherwise
              make available certain information, text, graphics, videos, or
              other material. You are responsible for the content that you post
              on or through the service, including its legality, reliability,
              and appropriateness.
            </p>
            <p className="text-snap-gray mb-4">
              By posting content on or through our service, you represent and
              warrant that the content is yours or you have the right to use it
              and the right to grant us the rights and license as provided in
              these Terms. You retain any and all of your rights to any content
              you submit, post, or display on or through the service, and you
              are responsible for protecting those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              5. Intellectual Property
            </h2>
            <p className="text-snap-gray mb-4">
              The service and its original content (excluding content provided
              by users), features, and functionality are and will remain the
              exclusive property of iibsy and its licensors. The service is
              protected by copyright, trademark, and other laws of both the
              United States and foreign countries. Our trademarks and trade
              dress may not be used in connection with any product or service
              without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              6. Termination
            </h2>
            <p className="text-snap-gray mb-4">
              We may terminate or suspend your account and bar access to the
              service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever, including without
              limitation if you breach the Terms.
            </p>
            <p className="text-snap-gray mb-4">
              If you wish to terminate your account, you may simply discontinue
              using the service. All provisions of the Terms which by their
              nature should survive termination shall survive termination,
              including, without limitation, ownership provisions, warranty
              disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              7. Limitation of Liability
            </h2>
            <p className="text-snap-gray mb-4">
              In no event shall iibsy, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              8. Governing Law
            </h2>
            <p className="text-snap-gray mb-4">
              These Terms shall be governed and construed in accordance with the
              laws of the United States, without regard to its conflict of law
              provisions. Our failure to enforce any right or provision of these
              Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              9. Changes to Terms
            </h2>
            <p className="text-snap-gray mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              10. Contact Us
            </h2>
            <p className="text-snap-gray mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-snap-gray">
              <strong>Email:</strong> support@iibsy.com
              <br />
              <strong>Phone:</strong> +252 (63) 673-0837
            </p>
          </section>
        </div>

        <p className="text-snap-gray text-sm mt-6 text-center">
          Last updated: April 26, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
