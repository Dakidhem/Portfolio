import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import myself from "../../public/images/myself.jpeg";
export default function Home() {
  return (
    <section className="max-w-[1440px] w-full px-10 mx-auto">
      <div className="text-center p-10">
        <h2 className="text-5xl text-teal-700">
          Hi, I am <span className="font-bold">Mehdi Kadiri</span>
        </h2>
        <h3 className="text-2xl py-2">Full stack web developer.</h3>
        <p className="text-md py-5 leading-8 text-gray-600">
          Web developer passionate with creating websites and learning new stuff
          everyday
        </p>
        <div>
          <ul className="flex items-center justify-center gap-8 text-gray-600">
            <li>
              <a href="https://github.com/Dakidhem">
                <AiFillGithub className="text-5xl" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mehdi-kadiri-05178b1b7/">
                <AiFillLinkedin className="text-5xl" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center py-8">
          <Image
            src={myself}
            alt="myself"
            className="rounded-full"
            width="400"
            height="400"
          ></Image>
        </div>
      </div>
    </section>
  );
}
