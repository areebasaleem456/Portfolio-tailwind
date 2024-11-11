import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  let education = [
    {
      uniName: "University Of Campus",
      date: "November 2022",
      field: "Bachelor In Commerce",
      details:
        "Studying B.Com has been a transformative experience, equipping me with the knowledge and skills necessary to succeed in the business world. With a strong foundation in accounting, finance, and management, I am confident in my ability to secure a rewarding career in commerce, whether in industry, finance, or public practice.",
    },
    {
      uniName: "Govt College For Women Shahr-e-Liaquat Karachi",
      date: "September 2020",
      field: "Intermediate",
      details:
        "I pursued Intermediate studies in the Biological Sciences, cultivating a deep understanding of the intricacies of life. This foundational program in Biology, Chemistry, and Physics laid the groundwork for my future academic and professional pursuits in the biomedical field.",
    },
    {
      uniName: "B.M.B Toddlers Secondary School ",
      date: "September 2018",
      field: "Matriculation",
      details:
        "During my Matriculation, I thoroughly enjoyed studying Biology, which encompassed subjects like Botany, Zoology, and Physiology. This comprehensive program helped me grasp fundamental concepts, including cellular structure, genetics, and ecosystems, preparing me for further studies in the biological sciences.",
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-scroll">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {education.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.field}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.uniName}
                </h2>
                <p className="leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
