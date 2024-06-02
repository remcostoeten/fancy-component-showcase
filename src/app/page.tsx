"use client";

import React from "react";
import { FaBeer, FaCoffee, FaApple } from "react-icons/fa";
import HoverCard from "./HoverCard";

const cardVariants = [
  {
    title: "Card with Beer Icon",
    paragraph: "This card has a beer icon.",
    icon: <FaBeer />,
    bgColor: "#e0f7fa",
    hoverColor: "#b2ebf2",
  },
  {
    title: "Card with Coffee Icon",
    paragraph: "This card has a coffee icon.",
    icon: <FaCoffee />,
    bgColor: "#ffe0b2",
    hoverColor: "#ffcc80",
  },
  {
    title: "Card with Apple Icon",
    paragraph: "This card has an apple icon.",
    icon: <FaApple />,
    bgColor: "#e1bee7",
    hoverColor: "#ce93d8",
  },
];

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Code copied to clipboard!");
};

const CardsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <HoverCard
          title="Card with Beer Icon"
          paragraph="This card has a beer icon."
          icon={<FaBeer />}
          bgColor="#000"
          hoverColor="#b2ebf2"
        />
        {cardVariants.map((variant, index) => (
          <div key={index} className="relative">
            <HoverCard
              title={variant.title}
              paragraph={variant.paragraph}
              icon={variant.icon}
              bgColor={variant.bgColor}
              hoverColor={variant.hoverColor}
            />
            <button
              onClick={() =>
                copyToClipboard(`
import React from 'react';
import HoverCard from '../components/HoverCard';
import { ${variant.icon.type.name} } from 'react-icons/fa';

const Example = () => (
  <HoverCard
    title="${variant.title}"
    paragraph="${variant.paragraph}"
    icon={<${variant.icon.type.name} />}
    bgColor="${variant.bgColor}"
    hoverColor="${variant.hoverColor}"
  />
);

export default Example;
              `)
              }
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
