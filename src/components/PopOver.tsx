import React, { ReactNode } from "react";

const PopOver = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="hs-tooltip [--trigger:click] [--placement: inline-block left]">
      {children}
    </div>
  );
};

function PopOverTrigger({ children }: { children?: ReactNode }) {
  return <div className="block hs-tooltip-toggle text-center">{children}</div>;
}

function PopOverContent({ children }: { children: ReactNode }) {
  return (
    <div
      className="z-20 absolute border-gray-100 dark:border-neutral-700 hidden bg-white dark:bg-neutral-800 opacity-0 hs-tooltip-shown:opacity-100 shadow-md hs-tooltip-content hs-tooltip-shown:visible border rounded-lg max-w-xs text-start transition-opacity invisible"
      role="tooltip"
    >
      {children}
    </div>
  );
}

export { PopOver, PopOverTrigger, PopOverContent };
