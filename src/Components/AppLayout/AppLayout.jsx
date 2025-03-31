import React from "react";
import { Hexagon } from "./Hexagon"; // Assuming your design components are reusable
import { Circle } from "./Circle";
import torusKnot from "../../asset/torus-knot.png";
import cube from "../../asset/cube.png";
import { CutCornerButton } from "../Header/CutCornerButton"; // Assuming this is the button style
import { Features } from "../Feature/Feature";

const AppLayout = ({ children }) => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip ">
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[500px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[400px] -top-[170px]">
                <img src={torusKnot} alt="3D torus knot shape" className="size-[140px]" />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[600px] -top-[80px]">
                <img src={cube} alt="3D cube shape" className="size-[140px]" />
              </Circle>
            </div>
          </div>
        </div>
        {/* Pass content of each page */}
        <div className="flex justify-center">
          <div className="max-w-lg mx-auto p-6 shadow-md rounded-lg font-caveat m-10">
            {children} {/* This is where the content will be injected */}
            {Features}
          </div>
        </div>
    </section>
  );
};

export default AppLayout;
