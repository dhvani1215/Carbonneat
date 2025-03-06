
import React from "react";
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";

const CookiePolicyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl pt-32 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-medium mb-4">Cookie Policy</h1>
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
            This Cookie Policy explains how CarbonNeat ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at carbonneat.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>2. What are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, CarbonNeat) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2>3. Why Do We Use Cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for analytics and other purposes.
          </p>
          <p>The specific types of first and third-party cookies served through our Website and the purposes they perform include:</p>
          
          <h3>Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
          </p>
          
          <h3>Performance & Analytics Cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our Website. They help us know which pages are the most and least popular and see how visitors move around the Website. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site.
          </p>
          
          <h3>Functional Cookies</h3>
          <p>
            These cookies enable the Website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
          </p>
          
          <h3>Targeting Cookies</h3>
          <p>
            These cookies may be set through our Website by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
          </p>

          <h2>4. How Can You Control Cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted.
          </p>
          <p>
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
          </p>

          <h2>5. How Often Will We Update This Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>

          <h2>6. Where Can You Get Further Information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at privacy@carbonneat.com.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CookiePolicyPage;
