import React from "react";
// import photo from "../assets/port_photo.png";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div id="about" className="flex ">
        <section className="min-h-[80vh] flex flex-col justify-center py-10 max-w-6xl px-12">
          <section className="">
            <h2 className="text-2xl dark:text-[#93B1A6] font-semibold mb-4">
              About Me
            </h2>
            <br />
            <p className="text-gray-500">
              I am a Computer Science undergraduate with a passion for
              technology and software development. My journey in the world of
              programming began when I wrote my first Hello World program,
              and I have been captivated by the endless possibilities of coding
              ever since.
            </p>
            <br />
            <p className="text-gray-500">
              I am a passionate developer who is always seeking a keen interest
              in open-source software (OSS). With expertise in the MERN stack
              and a continuous drive for learning, I strive to build scalable
              and highly available systems.
            </p>
            <br />
            <p className="text-gray-500">
              My goal is to leverage my skills and knowledge to create
              innovative and user-friendly web applications. I am enthusiastic
              about learning new technologies and staying up-to-date with
              industry trends to ensure that I deliver high-quality solutions to
              every project I undertake.
            </p>
            <br />
            {/* <p className="text-gray-500">
              If you'd like to discuss a project, collaboration, or any
              potential opportunities, please reach out at{" "}
              <a className="text-blue-500" href="mailto:your.email@example.com">
                Email
              </a>
            </p> */}
          </section>
        </section>
        {/* <div className="mt-36 mr-4 w-[40rem] hidden md:block flex-col dark:text-[#93B1A6]">
          <img src={photo} alt="my_photo" className=" rounded-2xl " />
          <p className=" text-xl  py-6 font-medium">Contact</p>
          <p className="font-light">
            <a className="text-blue-500" href="mailto:your.email@example.com">
              pahuneved@gmail.com
            </a>
          </p>
        </div> */}
      </div>
    </motion.div>
  );
}

export default About;
