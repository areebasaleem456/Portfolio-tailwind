import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-scroll">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/project1.jpeg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-white">
                <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1 line-clamp-2">
                  Static Interactive Resume
                </h1>
                <p className="leading-relaxed font-serif text-xl">
                "Transform your resume into an immersive experience, showcasing your unique value."
                </p>
                <Link href={"#"} target="_blank" className="text-2xl hover:text-blue-500 hover:underline"><p className="mt-4">View Project</p></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/shareable.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-white">
                <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1 line-clamp-2">
                  Shareable Resume Builder
                </h1>
                <p className="leading-relaxed font-serif text-xl">
                "A cutting-edge Shareable Resume Builder crafted with Next.js and Tailwind CSS."

                </p>
                <Link href={"#"} target="_blank" className="text-2xl hover:text-blue-500 hover:underline"><p className="mt-4">View Project</p></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/portfolio.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-white">
                <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1 line-clamp-2">
                  Animated Portfolio
                </h1>
                <p className="leading-relaxed font-serif text-xl line-clamp-3">
                "Unlock storytelling with my interactive animated portfolio, powered by Next.js and Tailwind CSS. Explore, engage, and be inspired."
                </p>
                <Link href={"#"} target="_blank" className="text-2xl hover:text-blue-500 hover:underline"><p className="mt-4">View Project</p></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/funiro.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-white">
                <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1 line-clamp-2">
                Funiro E-Commerce Website
                </h1>
                <p className="leading-relaxed font-serif text-xl line-clamp-3">
                "Transform your space with FUNIRO. Discover sleek, affordable furniture beautifully presented on our Next.js and Tailwind CSS-powered platform."
                </p>
                <Link href={"#"} target="_blank" className="text-2xl hover:text-blue-500 hover:underline"><p className="mt-4">View Project</p></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/atm.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-white">
                <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1 line-clamp-2">
               ATM Machine
                </h1>
                <p className="leading-relaxed font-serif text-xl line-clamp-3">
                "Introducing the advanced ATM Machine Project, built with TypeScript, designed to simulate real-world banking experiences."
                </p>
                <Link href={"#"} target="_blank" className="text-2xl hover:text-blue-500 hover:underline"><p className="mt-4">View Project</p></Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/mobile.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 hover:opacity-100 cursor-pointer duration-300 bg-white">
                <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1 line-clamp-2">
               Phone Buying Website
                </h1>
                <p className="leading-relaxed font-serif text-xl line-clamp-3">
                "Explore my Website, a stunning single-page website crafted with precision using a Figma template."
                </p>
                <Link href={"#"} target="_blank" className="text-2xl hover:text-blue-500 hover:underline"><p className="mt-4">View Project</p></Link>
              </div>
            </div>
          </div>
         </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
