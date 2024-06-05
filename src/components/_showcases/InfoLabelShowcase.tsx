import React from "react";
import { HeartIcon, SparklesIcon } from "../icons";
import { StarIcon } from "lucide-react";
import InfoLabel from "../shells/InfoLabel";

export default function InfoLabelShowcase() {
  return (
    <div>
      <InfoLabel>Default Gray</InfoLabel>
      <InfoLabel icon={<SparklesIcon />}>Gray with Star Icon</InfoLabel>
      <InfoLabel variant="black">Black Variant</InfoLabel>
      <InfoLabel variant="black" icon={<HeartIcon />}>
        Black with Heart Icon
      </InfoLabel>
      <InfoLabel variant="colorful">Colorful Variant</InfoLabel>
      <InfoLabel variant="colorful" icon={<StarIcon />}>
        Colorful with Star Icon
      </InfoLabel>
    </div>
  );
}
