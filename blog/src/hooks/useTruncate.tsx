import { useState } from "react";

export const useTruncate = () => {
  const [truncateLength, setTruncateLength] = useState(100);

  const truncate = (text: string, length: number) => {
    if (text.length <= length) {
      return text;
    }

    return text.slice(0, length) + "...";
  };

  return { truncate, truncateLength, setTruncateLength };
};
