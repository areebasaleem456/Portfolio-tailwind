import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";

export function Sidebar() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-5">
      {/*image*/}
      <Image
        src={"/mypicture.jpeg"}
        height={200}
        width={200}
        alt="picture"
        className="rounded-md"
      ></Image>
      {/*name*/}
      <div className="mt-3">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight uppercase">
          Areeba Saleem
        </h1>
        <h1 className="scroll-m-20 text-gray-800 text-lg font-bold tracking-tight text-center py-3">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "UI/UX Designer",
                "Front End Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      {/*social media logos*/}
      <div className="mt-2 grid grid-cols-3 gap-3 py-3">
        <div>
          <Link href="www.linkedin.com/in/areeba-saleem-67025a2ba" target="_blank" className="text-gray-700 hover:text-[#0077B5]" >
            <FaLinkedin size={40} />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.facebook.com/tooba.saleem.3954?mibextid=ZbWKwL" target="_blank"
            className="text-gray-700 hover:text-[#1877F2]"
          >
            <FaFacebook size={40} />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/account" target="_blank" className="text-gray-700 hover:text-black">
            <FaGithub size={40} />
          </Link>
        </div>
      </div>

      {/*download cv button*/}
      <Link href={"#"} className="mt-5">
      <Button>
      <FaCloudDownloadAlt /> Download CV
    </Button>
    </Link>
    </div>
  );
}
