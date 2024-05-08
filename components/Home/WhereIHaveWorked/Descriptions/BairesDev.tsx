import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BairesDev() {
  const tasks = [
    {
      text: "Developed and maintained high-performance real estate and e-commerce websites using MicroFrontend architecture and modern JavaScript frameworks such as React, VueJS and NextJS",
      keywords: [],
    },
    {
      text: "Designed and built large-scale, real-time data visualizations using Tableau, enabling intuitive and insightful data representation for enchanced decision-making",
      keywords: [],
    },
    {
      text: "Ensured high code quality by incorporating comprehensive testing strategies, achieving over 80% test coverage",
      keywords: [],
    },
    {
      text: "Integrated RESTful APIs and GraphQL to seamlessly connect frontend applications with backend services, facilitating efficient data exchange and interactions",
      keywords: [],
    },
    {
      text: "Thrived in agile environments, collaborating closely with cross-functional teams to deliver high-quality solutions and streamline development processes",
      keywords: [],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Mar 2020 - July 2021
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
