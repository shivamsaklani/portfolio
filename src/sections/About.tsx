"use client";
import {motion} from "motion/react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTML from "@/assets/icons/html5.svg";
import CSS from "@/assets/icons/css3.svg";
import Docker from "@/assets/icons/docker-svgrepo-com.svg";
import Aws from "@/assets/icons/aws-svgrepo-com.svg";
import GitHub from "@/assets/icons/github.svg";
import Kubernetes from "@/assets/icons/kubernetes-svgrepo-com.svg";
import Java from "@/assets/icons/java-svgrepo-com.svg";
import Prisma from "@/assets/icons/light-prisma-svgrepo-com.svg";
import Mongo from "@/assets/icons/mongodb-svgrepo-com.svg";
import Postgres from "@/assets/icons/postgresql-logo-svgrepo-com.svg";
import Typescript from "@/assets/icons/typescript-svgrepo-com.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
const toolboxItems =[
  {
    title:'Docker',
    icon:Docker
  },
  {
    title:'Kubernetes',
    icon:Kubernetes
  }, {
    title:'Java',
    icon:Java,

  },
  {
    title:'Javascript',
    icon:JavascriptIcon
  },
  {
    title:'Typescript',
    icon:Typescript
  },
  {
    title:'AWS',
    icon:Aws
  },
  {
    title:'HTML5',
    icon:HTML
  },
  {
    title:'CSS3',
    icon:CSS
  },
  {
    title:'Github',
    icon:GitHub
  },
{
    title:'React',
    icon:ReactIcon
  }, 
  {
    title:'MongoDB',
    icon:Mongo
  },
  {
    title:'Postgres SQL',
    icon:Postgres
  },
  {
    title:'Prisma ORM',
    icon:Prisma
  }

];

const Education =[
  {
    title:"Bachelor's of Technology Major in Computer Science",
    subtitle:"Uttaranchal University",
    date:"2022-2026"
  },
  {
    title:"Glacier Public School",
    subtitle:"11th-12th",
    date:"2020-2022"
  }
]
export const AboutSection = () => {
  return <motion.div className="pb-20">
   <motion.div className="">
   <SectionHeader title="About Me" subtitle="A Glimpse Into My World" description="Know more about me, what I do,My skills"/>
   
   
   <motion.div  className="mt-10 mx-5  sm:mx-20 flex flex-col gap-8">
   <Card cardclassName="p-6" className="h-[320px] ">
    <CardHeader title="Education"  />

    <motion.div initial={{opacity:0,translateX:-50}} whileInView={{opacity:1, translateX:0}} 
    transition={{duration:1

    }} className="">
    {Education.map((item,index)=>(
      <motion.div className="mt-10" key={index}>
        <h1 className="text-gray-200">{item.title}</h1>
         <span className="flex text-sans mt-5 justify-between">
          <h1>{item.subtitle}</h1>
         <p className="text-gray-400">{item.date}</p></span>
        </motion.div>
     ))}
    </motion.div>
    
   </Card>

   <Card cardclassName="p-6" className="h-[320px]">
   <CardHeader title="My Skills"/>
   
   <ToolboxItems toolboxItems={toolboxItems}  className="mt-6"/>
   
   
   <ToolboxItems toolboxItems={toolboxItems} isLeft={false}  className="mt-6 -translate-x-10"/>
   </Card>
   </motion.div>
   </motion.div>
    </motion.div>;
};
