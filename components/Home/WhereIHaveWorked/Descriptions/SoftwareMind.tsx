import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function SoftwareMind() {
  const tasks = [
    {
      text: "Architected and developed a robust fintech platforms from the ground up, showcasing strong architectural and development skills to deliver an impactful financial technology solution",
      keywords: [],
    },
    {
      text: "Leveraged TypeScript, React, Material-UI, Jest, and Cypress to craft a robust and user-friendly frontend application, ensuring a seamless and intuitive user experience",
      keywords: [],
    },
    {
      text: "Implemented data visualization within a dashboard page using Metabase, enhancing the platform with comprehensive insights and analytic capabilities",
      keywords: [],
    },
    {
      text: "Utilized Node.js, PostgreSQL, and Prisma to design and develop a scalable and efficient backend infrastructure, prioritizing data management, security and performance",
      keywords: [],
    },
    {
      text: "Leveraged AWS services including Lambda, API Gateway, and S3 to construct a highly scalable and available cloud infrastructure, ensuring the reliability and scalability of the platform",
      keywords: [],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May 2019 - March 2020
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
