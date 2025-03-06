
import React from "react";
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";
import { Leaf, Globe, BarChart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-medium mb-6"
          >
            About <span className="text-primary">CarbonNeat</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Empowering individuals to understand and reduce their carbon footprint
            through education, measurement, and actionable solutions.
          </motion.p>
        </div>
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At CarbonNeat, we believe that understanding your environmental impact
                is the first step toward making meaningful change. Our mission is to make
                carbon footprint calculation accessible and actionable for everyone.
              </p>
              <p className="text-muted-foreground">
                We provide tools and information to help individuals and communities
                reduce their carbon emissions through informed choices and sustainable
                practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                <Globe className="w-48 h-48 text-primary relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're driven by our commitment to environmental stewardship and
              empowering individuals to take action against climate change.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={<Leaf className="h-8 w-8 text-nature-500" />}
              title="Sustainability"
              description="We advocate for sustainable living practices that reduce environmental impact and promote ecological balance."
              delay={0.1}
            />
            <ValueCard
              icon={<BarChart className="h-8 w-8 text-blue-500" />}
              title="Accuracy"
              description="We provide scientifically-based calculations and information to ensure users can make informed decisions."
              delay={0.2}
            />
            <ValueCard
              icon={<Users className="h-8 w-8 text-amber-500" />}
              title="Accessibility"
              description="We believe environmental tools should be accessible to everyone, regardless of background or expertise."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-medium mb-4">How CarbonNeat Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to understand and reduce your carbon footprint
              through a simple, user-friendly process.
            </p>
          </motion.div>

          <div className="space-y-6">
            <Step
              number={1}
              title="Calculate Your Footprint"
              description="Answer simple questions about your lifestyle, transportation, home energy use, and diet to calculate your personal carbon footprint."
            />
            <Step
              number={2}
              title="Get Personalized Recommendations"
              description="Receive tailored suggestions for reducing your emissions based on your specific lifestyle and carbon footprint results."
            />
            <Step
              number={3}
              title="Take Action"
              description="Implement changes in your daily life using our actionable tips and track your progress over time."
            />
            <Step
              number={4}
              title="Offset Remaining Emissions"
              description="For emissions you can't eliminate, support verified carbon offset projects that reduce or remove carbon from the atmosphere."
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-medium mb-6">Our Commitment</h2>
            <p className="text-muted-foreground mb-6">
              We're committed to providing accurate, science-based information and tools
              to help everyone understand and reduce their environmental impact. Our team
              regularly updates our calculations and recommendations based on the latest
              climate science and research.
            </p>
            <p className="text-muted-foreground">
              Together, we can make a significant difference in the fight against climate
              change, one carbon footprint at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon, title, description, delay }: ValueCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <Card className="h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-4">{icon}</div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card"
  >
    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-medium">
      {number}
    </div>
    <div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

export default AboutPage;
