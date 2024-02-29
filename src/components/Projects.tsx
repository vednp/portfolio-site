import { Github, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const streamablePhoto = "streamable-photo.png";
const pomofocusPhoto = "pomofocus-photo.png";
const flashChatPhoto = "flash-chat-photo.png";

function Projects() {
  const projects = [
    {
      name: "Streamable",
      description:
        "Streamable is a multi-server streaming website that allows users to watch TV shows and movies.",
      image: streamablePhoto,
      link: "https://streamable-gold.vercel.app",
      github_link: "https://github.com/vednp/streamable",
    },
    {
      name: "Pomofocus",
      description:
        "Pomofocus is a productivity app that helps you focus on your work.",
      image: pomofocusPhoto,
      link: "https://pomofocus-app.netlify.app",
      github_link: "https://github.com/vednp/pomofocus-app",
    },
    {
      name: "Flash Chat",
      description:
        "Flash Chat is a web app that allows users to communicate with each other.",
      image: flashChatPhoto,
      link: "https://flash-chat-app-t7w2.onrender.com",
      github_link: "https://github.com/vednp/flash-chat-app",
    },
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-4 dark:text-[#93B1A6]">
        Projects
      </h2>
      <br />
      <ul className="flex flex-wrap justify-evenly">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <li key={project.name} className="mb-8">
      <div
        className="max-w-sm rounded-lg shadow bg-gray-800 border-gray-700 hover:border-blue-500 hover:border-t-4 transition-all duration-300 flex flex-col justify-between"
        style={{ height: "450px", width: "400px" }}
      >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Image
            className=""
            src={`/${project.image}`}
            width={400}
            height={400}
            alt={project.name}
          />
        </a>
        <div className="p-5">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {project.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400">
            {project.description}
          </p>
          <div className="flex space-x-4 p-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MoveRight className="w-4 h-4 mr-2" />
              Visit Site
            </a>
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Projects;
