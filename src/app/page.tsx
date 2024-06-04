"use client";

import React from "react";
import { FaBeer, FaCoffee, FaApple } from "react-icons/fa";
import HoverCard from "./HoverCard";
import { useCopyToClipboard } from "@/core/helpers/copyToClipboard";
import { AuthenticationIcon, ExternalLinkIcon } from "@/components/icons";

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
          <HoverCard>{CardContent()}</HoverCard>
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

function CardContent() {
  return (
    <div className="px-6 py-4 flex flex-col space-y-4 md:px-3">
      <div className="flex items-center space-x-3">
        <div className="rounded  bg-gray-accent p-1.5 text-foreground-light shadow-sm">
          <AuthenticationIcon />
        </div>

        <h5>Authentication</h5>
      </div>
      <div className="flex flex-grow md:min-h-[50px] xl:min-h-[75px]">
        <p className="text-sm text-foreground-light">
          A complete user management system that works without any additional
          tools.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <a
          data-size="tiny"
          type="button"
          className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state='open']:bg-selection data-[state='open']:outline-brand-600 data-[state='open']:border-button-hover shadow-sm text-xs px-2.5 py-1 h-[26px]"
          href="/dashboard/project/vmaptligoptycqsqkami/auth/users"
        >
          <span className="truncate">Explore Auth</span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          data-size="tiny"
          type="button"
          className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-button hover:bg-selection border-button hover:border-button-hover focus-visible:outline-brand-600 data-[state='open']:bg-selection data-[state='open']:outline-brand-600 data-[state='open']:border-button-hover shadow-sm text-xs px-2.5 py-1 h-[26px] translate-y-[1px]"
          href="https://supabase.com/docs/guides/auth"
        >
          <div className="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px]">
            <ExternalLinkIcon />
          </div>
          <span className="truncate">About Auth</span>
        </a>
      </div>
    </div>
  );
}
