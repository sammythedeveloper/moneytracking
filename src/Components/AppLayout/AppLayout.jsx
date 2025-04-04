import React from "react";
import { Hexagon } from "./Hexagon"; // Assuming your design components are reusable
import { Circle } from "./Circle";
import torusKnot from "../../asset/torus-knot.png";
import cube from "../../asset/cube.png";
import ring from "../../asset/torus.png"
import astroid from "../../asset/icosahedron.png"

const AppLayout = ({ children }) => {
  return (
    <section className="relative py-96 md:py-52 overflow-x-clip">
      {/* Background design elements (hexagons and circles) */}
      <div className="absolute inset-0 z-0 flex justify-center ">
        <div className="inline-flex relative  ">
          {/* Large Hexagon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 mt-96">
            <Hexagon className="size-[1800px]" />
          </div>
          {/* Medium Hexagon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 mt-96">
            <Hexagon className="size-[1100px]" />
          </div>
          {/* Small Hexagon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 mt-96">
            <Hexagon className="size-[500px]" />
          </div>
          {/* Circles */}
          <div className="absolute -left-[600px] top-[10px] z-0">
            <Circle>
              <img
                src={cube}
                alt="3D torus knot shape"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <div className="absolute left-[350px] -top-[-580px] z-0">
            <Circle>
              <img
                src={torusKnot}
                alt="3D cube shape"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <div className="absolute -left-[450px] -top-[-1380px] z-0">
            <Circle>
              <img
                src={ring }
                alt="3D cube shape"
                className="size-[140px]"
              />
            </Circle>
          </div>
         
          
        </div>
      </div>
      {/* Content is above the background elements */}
      <div className="relative z-10 mt-9610">
        {children} {/* This is where the content will be injected */}
      </div>
    </section>
  );
};

export default AppLayout;
