"use client";

import { useCallback } from "react";
import { toast } from "sonner";

export const useCopyToClipboard = (textToCopy: string) => {
  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard:", textToCopy);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  }, [textToCopy]);

  return copyToClipboard;
};

/**
 *  Usage

function MyComponent() {
  const textToCopy = 'Hello, world!';
  const copyToClipboard = useCopyToClipboard(textToCopy);

  return (
    <button onClick={copyToClipboard}>
      Copy to clipboard
    </button>
  );
}

*/
