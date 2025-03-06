
import React from "react";
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";

const TermsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-medium mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: June 15, 2023</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2>1. Introduction</h2>
          <p>
            Welcome to CarbonNeat. These Terms of Service govern your use of our website and services. By using CarbonNeat, you agree to these Terms of Service in their entirety. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2>2. Definitions</h2>
          <p>
            <strong>"Service"</strong> refers to the CarbonNeat website and all content, services, and products available at or through the website.
          </p>
          <p>
            <strong>"User"</strong> or <strong>"You"</strong> refers to the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual is accessing or using the Service.
          </p>
          <p>
            <strong>"Company"</strong>, <strong>"We"</strong>, <strong>"Us"</strong>, or <strong>"Our"</strong> refers to CarbonNeat.
          </p>

          <h2>3. Use of Service</h2>
          <p>
            CarbonNeat provides tools and information to help users understand and reduce their carbon footprint. The carbon footprint calculations and recommendations provided are estimates based on the information you provide and general research, and should not be considered exact measurements.
          </p>
          <p>
            You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul>
            <li>Use the Service in any way that violates any applicable law or regulation</li>
            <li>Attempt to interfere with or disrupt the proper operation of the Service</li>
            <li>Collect or harvest any information from the Service without our express consent</li>
            <li>Copy, distribute, or disclose any part of the Service without prior written consent from us</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of CarbonNeat. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CarbonNeat.
          </p>

          <h2>5. User Content</h2>
          <p>
            You may be able to create, post, or share content through our Service. You retain ownership of any intellectual property rights that you hold in that content, but you grant us a worldwide, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content.
          </p>

          <h2>6. Privacy</h2>
          <p>
            Our Privacy Policy describes how we handle the information you provide to us when you use our Service. By using CarbonNeat, you agree to our collection, use, and sharing of information as described in our Privacy Policy.
          </p>

          <h2>7. Accuracy of Information</h2>
          <p>
            We make every effort to provide accurate information through our Service, but we cannot guarantee the accuracy, completeness, or usefulness of any information on the Service. Any reliance you place on such information is strictly at your own risk.
          </p>

          <h2>8. Links to Other Websites</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by CarbonNeat. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that CarbonNeat shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            In no event shall CarbonNeat, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@carbonneat.com.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TermsPage;
