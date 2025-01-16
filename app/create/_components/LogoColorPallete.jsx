"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

function LogoColorPallete({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);

  return (
    <div className="my-10">
      {/* Heading Section */}
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      {/* Color Palette Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {Colors.map((palette, index) => (
          <div
            className={`flex flex-col items-center justify-center cursor-pointer p-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
              selectedOption === palette.name && "ring-2 ring-offset-2 ring-red-950"
            }`}
            key={index}
            onClick={() => {
              setSelectedOption(palette.name);
              onHandleInputChange(palette.name);
            }}
          >
            {/* Palette Colors */}
            <div className="flex w-full h-24 rounded-lg overflow-hidden">
              {palette.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-full h-full"
                  style={{ backgroundColor: color }}
                  aria-label={`Color ${color}`}
                  title={color}
                ></div>
              ))}
            </div>

            {/* Palette Name */}
            <p
              className={`mt-2 text-sm font-medium ${
                selectedOption === palette.name ? "text-red-950" : "text-gray-600"
              }`}
            >
              {palette.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoColorPallete;
