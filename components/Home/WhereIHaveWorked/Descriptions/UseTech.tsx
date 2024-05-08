import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function UseTech() {
  const tasks = [
    {
      text: "Architect and develop smart contracts for more than 10 client Ethereum projects",
      keywords: [],
    },
    {
      text: "Developed and implemented Rust smart contract with Anchor to faciliate DeFi solutions on Solana network, ensuring secure and efficient transaction processing",
      keywords: [],
    },
    {
      text: "Spearheaded the automation of smart contract testing processes, resulting in a significant reduction in testing time and improved overall code quality and reliability",
      keywords: [],
    },
    {
      text: "Design blockchain technology around business model and launched a blockchain network using Cosmos SDK",
      keywords: [],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Rust | Solana | Web3 Developer{" "}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            September 2021 - April 2023
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
