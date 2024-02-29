import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Social() {
  return (
    <ul className="space-x-4 justify-center dark:text-[#93B1A6]">
      <a href="https://github.com/vednp" target="_blank">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/vednp/" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://twitter.com/vedpahune" target="_blank">
        <TwitterIcon />
      </a>
      <a
        href="https://drive.google.com/file/d/13vRQB6YuY5dZ5rNaghGdwdm8ACXLk104/view?usp=share_link"
        className="bg-white px-2.5 text-black font-normal py-1.5 text-xs rounded-2xl"
      >
        Resume
      </a>
    </ul>
  );
}

export default Social;
