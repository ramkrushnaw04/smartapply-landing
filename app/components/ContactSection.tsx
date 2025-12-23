import React from "react";
import { motion } from "framer-motion";
import GradientHeading from "./ui/GradientHeading";
import GradientButton from "./ui/GradientButton";


const ContactSection: React.FC = () => {
  return (
    <section 
        id="contact-us"
        className="content w-full flex justify-center items-center px-2"
        data-bg="dark"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-3xl bg-gradient-to-br from-black via-gray-900 to-indigo-900 relative flex flex-col items-center mx-auto py-10 px-12"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.15), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.15), transparent 90%), #18181b",
        }}
      >
        
        <GradientHeading
            leftText=""
            highlightText="Let's Talk!"
            rightText="We're Here To Help"
            theme="dark"
            />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className="text-center text-gray-200 max-w-2xl mx-auto mb-10"
        >
          Have a question, feedback, or just want to say hi? Our team is ready to support you — whether you're a job seeker, recruiter, or just curious about what we do.
        </motion.p>

    

        <GradientButton
            size="md"
            onClick={() => {}}
        >
            Contact Us
        </GradientButton>



      </motion.div>
    </section>
  );
};

export default ContactSection;
