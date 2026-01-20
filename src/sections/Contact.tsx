"use client";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "shivasaklani1@gmail.com",
    link: "mailto:shivasaklani1@gmail.com"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Dehradun,India",
    link: null
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/shivam-saklani",
    link: "https://www.linkedin.com/in/shivam-saklani-378061199/"
  }
];

const socialLinks = [
  { icon: FaGithub, link: "https://github.com/shivamsaklani?tab=overview&from=2025-04-01&to=2025-04-14", label: "GitHub" },
  { icon: FaLinkedin, link: "https://www.linkedin.com/in/shivam-saklani-378061199/", label: "LinkedIn" },
  { icon: FaTwitter, link: "https://x.com/Saklani1_", label: "Twitter" },
  { icon: FaYoutube, link: "https://www.youtube.com/@shivamsaklani4002/streams", label: "YouTube" }
];

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      formRef.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY as string
    )
      .then(
        () => toast.success("Message sent successfully!"),
      ).catch((error) => {
        toast.error("Failed to send. Please try again.");
      });

    formRef.current.reset();
  };

  return (
    <div className="pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.2}>
          <SectionHeader
            title="Let's Connect"
            subtitle="Contact Me"
            description="Have a project in mind? Let's discuss how we can work together"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection delay={0.3} direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link || "#"}
                    className={`flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-white/10 hover:border-green-300/30 transition-all ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                    whileHover={{ scale: info.link ? 1.02 : 1 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-green-300/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-green-300 size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-400 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-white/10 hover:border-green-300/30 hover:bg-green-300/10 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="text-white size-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4} direction="right">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <motion.div
                className="bg-gray-800 rounded-2xl p-8 border border-white/10"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                {/* Name Field */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Label className="text-gray-300 mb-2 block">Your Name</Label>
                  <Input
                    name="user_name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-gray-900 border-white/10 text-white placeholder:text-gray-500 focus:border-green-300/50"
                    required
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Label className="text-gray-300 mb-2 block">Email Address</Label>
                  <Input
                    name="user_email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-gray-900 border-white/10 text-white placeholder:text-gray-500 focus:border-green-300/50"
                    required
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Label className="text-gray-300 mb-2 block">Message</Label>
                  <textarea
                    name="message"
                    className="w-full bg-gray-900 rounded-lg border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-green-300/50 focus:ring-1 focus:ring-green-300/50 transition-all min-h-[150px]"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-green-300 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-all"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(134, 239, 172, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
