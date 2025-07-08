import React from "react";

export interface FeatureHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}
export default function FeatureHeader({
  title,
  subtitle,
  description,
}: FeatureHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h3 className="font-semibold text-indigo-700">{title}</h3>
      <p className="text-3xl md:text-5xl font-semibold text-center">
        {subtitle}
      </p>
      <p className="text-lg md:text-xl text-neutral-600 text-center">
        {description.split("<br />").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
