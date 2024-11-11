import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from "../ui/button";
const MobileCard = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center">
      <div data-aos="zoom-in" className="card w-80 glass bg-blue-100 p-5 flex flex-col justify-center items-center">
        <Image
          src={"/mypicture.jpeg"}
          height={200}
          width={200}
          alt="picture"
          className="rounded-md mx-auto"
        ></Image>
        <div className="card-body">
          <h1 className="card-title scroll-m-20 text-2xl font-semibold tracking-tight uppercase">
          Areeba Saleem
        </h1>
          <h1 className="scroll-m-20 text-blue-700 text-lg font-bold  text-center py-3">
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
      <Link href={"#"} className="mt-5">
      <Button>
      <FaCloudDownloadAlt /> Download CV
    </Button>
    </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
