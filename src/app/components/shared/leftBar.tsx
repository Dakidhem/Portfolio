import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftBar = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/dakidhem" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/mehdi-kadiri-05178b1b7"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.instagram.com/mehdikadiri/" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-Green cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-40 bg-textDark"></div>
    </div>
  );
};

export default LeftBar;
