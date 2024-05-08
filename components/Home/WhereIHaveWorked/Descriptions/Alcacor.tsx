import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Alcacor() {
  const tasks = [
    {
      text: "Built the pixel perfect landing page with React + Vite and implemented various animations and effects for eye-catching and user friendly interface",
      keywords: [],
    },
    {
      text: "Wrote smart contracts like staking and vesting which is needed for DeFi protocol and audited and deployed them with Foundry",
      keywords: [],
    },
    {
      text: "Developed DeFi DApp which include DEX, Staking, Vesting, bonding etc. Integrated solidity smart contract using wagmi module in the DApp and implemented user-friendly and responsive interface",
      keywords: [],
    },
    {
      text: "Resolved numerous issues and challenges during development process and collaborated with team members closely for the success of our project",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web3 | Backend | Smart Contract
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            May 2023 - December
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
