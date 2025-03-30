// src/components/Layout/AppLayout.js
import React from "react";
import { Hexagon } from "./Hexagon"; // Assuming your design components are reusable
import { Circle } from "./Circle";
import torusKnot from "../../asset/torus-knot.png";
import cube from "../../asset/cube.png";
import { CutCornerButton } from "../Header/CutCornerButton"; // Assuming this is the button style

const AppLayout = ({ children }) => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        {/* Header or other global content like introduction */}
        <header>
          <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">
            Introducing Monify
          </p>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto">
            Where Spending Meets Control
          </h1>
          <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
            Monify is Your Daily Solution for Money Management, Helping You Build Better Financial Habits.
          </p>
          <div className="flex justify-center mt-10">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </header>

        {/* Background Design (Hexagons and Circles) */}
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
          <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg font-caveat m-10">
            {children} {/* This is where the content will be injected */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppLayout;
