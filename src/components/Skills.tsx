import React from "react";
import { motion } from "framer-motion";

const skills = {
  Web: [
    {
      name: "JavaScript",
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    },
    {
      name: "TypeScript",
      image: "https://img.icons8.com/?size=96&id=uJM6fQYqDaZK&format=png",
    },
    {
      name: "React",
      image:
        "https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616402_eeFIruMMzI8pFF4pkAmDjywdMWu9TQsT.jpg",
    },
    {
      name: "Next.js",
      image: "https://img.icons8.com/?size=96&id=MWiBjkuHeMVq&format=png",
    },
    {
      name: "Bootstrap",
      image: "https://img.icons8.com/?size=100&id=ldQqWiIRv9bc&format=png",
    },
    {
      name: "Material UI",
      image: "https://img.icons8.com/?size=96&id=gFw7X5Tbl3ss&format=png",
    },
    {
      name: "TailwindCSS",
      image: "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png",
    },
  ],
  Backend: [
    {
      name: "NodeJS",
      image:
        "https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg",
    },
    {
      name: "Express",
      image: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
    },
    {
      name: "Mongoose",
      image: "https://img.icons8.com/?size=96&id=gKfcEStXI1Hm&format=png",
    },
    {
      name: "Firebase",
      image: "https://img.icons8.com/?size=96&id=62452&format=png",
    },
    {
      name: "GraphQL",
      image: "https://img.icons8.com/?size=96&id=zdI5E8moxhs-&format=png",
    },
    {
      name: "Prisma (ORM)",
      image: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png",
    },
    {
      name: "Redis",
      image: "https://img.icons8.com/?size=96&id=DUsKDDZsg8FT&format=png",
    },
  ],
  Languages: [
    {
      name: "Python",
      image: "https://img.icons8.com/?size=96&id=13441&format=png",
    },
    {
      name: "C & C++",
      image: "https://img.icons8.com/?size=96&id=40669&format=png",
    },
    {
      name: "Java",
      image: "https://img.icons8.com/?size=96&id=13679&format=png",
    },
    {
      name: "Swift",
      image: "https://img.icons8.com/?size=96&id=24465&format=png",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      image: "https://img.icons8.com/?size=160&id=iFoT5Ds3iK1c&format=png",
    },
    {
      name: "Postgres",
      image: "https://img.icons8.com/?size=96&id=38561&format=png",
    },
  ],
  ML: [
    {
      name: "TensorFlow",
      image: "https://img.icons8.com/?size=96&id=n3QRpDA7KZ7P&format=png",
    },
  ],
  Tools: [
    {
      name: "Git",
      image: "https://img.icons8.com/?size=96&id=20906&format=png",
    },
    {
      name: "GitHub",
      image: "https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png",
    },
  ],
};

function Skills() {
  return (
    <section id="skills" className="py-8 px-12">
      <h2 className="text-2xl font-semibold mb-4 dark:text-[#93B1A6]">
        Skills
      </h2>

      <div className="flex flex-col gap-4 ">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-normal mb-2 dark:text-[#93B1A6]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills[category as keyof typeof skills].map((skill, skillIndex) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div
                    key={skillIndex}
                    className="bg-slate-900 md:py-4 md:px-12 px-6 py-2 rounded-lg shadow-md hover:shadow-lg"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="md:w-16 md:h-16 w-8 h-8 mx-auto mb-2"
                    />
                    <p className="text-center text-[#93B1A6] font-semibold">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
