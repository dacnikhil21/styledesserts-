import React from "react";

export const SplitText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", paddingRight: "0.2em", verticalAlign: "bottom" }}>
          <span className="split-word" style={{ display: "inline-block", transform: "translateY(100%)", opacity: 0 }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};
