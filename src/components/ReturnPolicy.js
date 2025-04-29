// src/components/ReturnPolicy.js
import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="pt-24 pb-12 px-4 bg-snap-light">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-snap-dark">
          Return Policy
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              1. Return Eligibility
            </h2>
            <p className="text-snap-gray mb-4">
              We accept returns within 30 days of delivery for most products. To
              be eligible for a return, your item must be in the same condition
              that you received it, unworn or unused, with tags, and in its
              original packaging. Additionally, you must have the receipt or
              proof of purchase.
            </p>
            <p className="text-snap-gray mb-4">
              Please note that certain items are non-returnable due to health,
              safety, or customization reasons, including:
            </p>
            <ul className="list-disc pl-6 text-snap-gray mb-4">
              <li>Custom-configured devices or special orders</li>
              <li>Products with broken seals or activated software licenses</li>
              <li>
                Personal accessories like earbuds or headphones once opened
              </li>
              <li>Digital downloads and software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              2. Return Process
            </h2>
            <p className="text-snap-gray mb-4">
              To initiate a return, follow these steps:
            </p>
            <ol className="list-decimal pl-6 text-snap-gray mb-4">
              <li>
                Log in to your iibsy account and navigate to your order history
              </li>
              <li>
                Select the order containing the item(s) you wish to return
              </li>
              <li>Select the specific item(s) and reason for return</li>
              <li>
                Print the return shipping label (if eligible for free returns)
                or make arrangements for return shipping
              </li>
              <li>
                Package the item(s) securely, including all original packaging
                and accessories
              </li>
              <li>
                Attach the return shipping label and drop off at the designated
                carrier location
              </li>
            </ol>
            <p className="text-snap-gray mb-4">
              If you have any difficulties with this process, please contact our
              customer support team for assistance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              3. Refunds
            </h2>
            <p className="text-snap-gray mb-4">
              Once we receive and inspect your return, we will notify you of the
              status of your refund. If approved, your refund will be processed
              and a credit will automatically be applied to your original method
              of payment within 5-10 business days. Please note that depending
              on your credit card company or financial institution, the refund
              may take an additional 2-10 business days to appear in your
              account.
            </p>
            <p className="text-snap-gray mb-4">
              Original shipping charges are non-refundable unless the item
              arrived damaged or defective. Return shipping costs are the
              responsibility of the customer unless the return is due to our
              error or a defective product.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              4. Exchanges
            </h2>
            <p className="text-snap-gray mb-4">
              If you need to exchange an item for the same product in a
              different size or color, please follow the regular return process
              and place a new order for the desired item. This helps ensure the
              quickest processing time and prevents inventory holds.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              5. Damaged or Defective Items
            </h2>
            <p className="text-snap-gray mb-4">
              If you receive a damaged or defective item, please contact our
              customer service team within 48 hours of receipt. We will provide
              instructions for returning the item and will cover the return
              shipping costs in these cases. Depending on availability, we will
              either send a replacement or issue a full refund including
              original shipping charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              6. Late or Missing Refunds
            </h2>
            <p className="text-snap-gray mb-4">
              If you haven't received a refund within the timeframe specified
              above, please check your bank account again, then contact your
              credit card company or bank, as it may take some time for the
              refund to officially post. Next, contact your bank to inquire
              about the status of the refund. If you've done all of this and
              still have not received your refund, please contact our customer
              service team.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-snap-dark">
              7. Contact Us
            </h2>
            <p className="text-snap-gray mb-4">
              If you have any questions about our return policy, please contact
              us at:
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

export default ReturnPolicy;
