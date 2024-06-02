'use client'

import { toast } from "sonner";
import { isProductionEnvironment } from "./ProductionOrDevelopment";

export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
   .then(() => {
      if (isProductionEnvironment()) {
        toast('Code copied to clipboard!');
      } else {
        console.log('Code copied to clipboard');
        toast('Code copied to clipboard!');
      }
    })
   .catch(err => {
      if (isProductionEnvironment()) {
        toast(`Failed to copy text: ${err.message}`);
      } else {
        console.error('Failed to copy text: ', err);
        toast(`Failed to copy text: ${err.message}`);
      }
    });
};