import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Groupon() {
  const tasks = [
    {
      text: "Rewrote Micro-Frontend Block with React, resulting in a significant improvement in performance and scalability, leading to a more efficient and responsive application",
      keywords: [],
    },
    {
      text: "Spearheaded the implementation of a mono repo structure for a large-scale web application, leading to a 30% reduction in code duplication and streamlining development process across multiple teams, fostering collaboration and efficiency",
      keywords: [],
    },
    {
      text: "Designed and implemented a robust micro frontend architecture using React and Web Components, resulting in substantial improvements in performance and scalability, with a notable 50% reduction in load time",
      keywords: [],
    },
    {
      text: "Led the initiative to convert the codebase from JavaScript to TypeScript, significantly enhancing code standards, mitigating type mismatch warnings, and facilitating easy scalability for the application",
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
            August 2018 - March 2019
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
