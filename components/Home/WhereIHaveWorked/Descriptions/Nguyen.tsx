import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Nguyen() {
  const tasks = [
    {
      text: "Collaborated with product managers and designers to successfully migrate a legacy web platform from JQuery/AngularJS to a modern React-based solution.",
      keywords: [],
    },
    {
      text: "Designed and implemented universal rendering for the website, resulting in enhanced performance and advanced search engine optimization capabilities",
      keywords: [],
    },
    {
      text: "Utilized React to create reusable UI components, including responsive navigation, tabs, and custom carousels, thereby elevating the user experience and maintaining consistency across the application",
      keywords: [],
    },
    {
      text: "Implemented a platform-agnostic user analytic solution for both new and legacy web apps, enabling data-driven decision-making and insights that fueled informed strategic choices and improvements",
      keywords: [],
    },
    {
      text: "Developed components and user interfaces using Vanilla JS, leveraging best practices and following established code guidelines to ensure robust and maintainable solutions",
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
            March 2016 - May 2018
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
