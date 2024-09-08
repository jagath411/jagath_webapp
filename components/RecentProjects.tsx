import React from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

console.log("recent Project");
const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{""}
        <span className="text-purple">RecentProjects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <PinContainer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
