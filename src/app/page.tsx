"use client";

import React from "react";
import { FaBeer, FaCoffee, FaApple } from "react-icons/fa";
import HoverCard from "./HoverCard";
import { useCopyToClipboard } from "@/core/utils/copyToClipboard";

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
    bgColor: "grey",
    hoverColor: "#ffcc80",
  },
  {
    title: "Card with Apple Icon",
    paragraph: "This card has an apple icon.",
    icon: <FaApple />,
    bgColor: "black",
    hoverColor: "red",
  },
];

const CardsPage: React.FC = () => {
  const copyToClipboard = useCopyToClipboard(`
    import React from 'react';
    import HoverCard from '../components/HoverCard';
    import { FaBeer } from 'react-icons/fa';

    const Example = () => (
      <HoverCard
        title="Card with Beer Icon"
        paragraph="This card has a beer icon."
        icon={<FaBeer />}
        bgColor="#e0f7fa"
        hoverColor="#b2ebf2"
      />
    );

    export default Example;
  `);

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              onClick={copyToClipboard}
              className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
  );
};

export default CardsPage;
