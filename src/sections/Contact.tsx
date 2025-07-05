"use client";
import {motion} from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

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
        () => alert("Message sent!"),
        () => alert("Failed to send.")
      );

    formRef.current.reset(); // reset after sending
  };

  return (
    <div className="lg:space-y-15">
     <div className="grid grid-rows  justify-center items-center">
     
     <div className="flex flex-col">
 

  {/* Animated Underline */}
  <div className="relative">
    <div className="relative">
    <SectionHeader subtitle="Contact" />
    </div>

  <motion.div
    className="absolute -left-15 md:-left-10 h-1 w-20 gradient rounded-lg"
    initial={{ scaleX: 0 }}
    whileInView={{translateX:0, scaleX:3}}
    transition={{ duration: 1 }}
    style={{ transformOrigin: "left" }}
  />
  </div>
 
</div>
      
     </div>
     <motion.div>
      <div className="flex min-h-screen flex-col items-center justify-center">
   
     
   <form ref={formRef} onSubmit={sendEmail} className="mt-[-40px] w-full flex justify-center px-4 ">   
  
   <div className="p-8 max-w-lg w-full rounded-2xl shadow-lg bg-white">
     <div className="space-y-5 text-gray-900">
      
         <Label className="text-gray-700">Your Name</Label>
         <Input name="user_name" type="text" placeholder="Enter your Name" />
       

     
         <Label className="text-gray-700">Email</Label>
         <Input name="user_email" type="email" placeholder="Enter your Email" />
    

     
         <Label className="text-gray-700">Your Thoughts</Label>
         <textarea 
         name="message"
           className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
           rows={5}
           placeholder="Please share your thoughts. I will surely respond."
         ></textarea>
  

       <div className="flex justify-center">
         <motion.div className="hover:bg-gray-950/90 cursor-pointer bg-gray-950 text-white px-6 py-2 rounded-md transition">
          <motion.div className="relative bg-green-300" />
         <button type="submit" className="cursor-pointer">
                Share Your Thoughts
         </button>
        
         
         </motion.div>
        
       </div>

     </div>
   </div>
  </form>
 </div>
 </motion.div>



    </div>
   
  );
};
