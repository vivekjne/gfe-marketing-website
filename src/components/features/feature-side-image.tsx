import Image from "next/image";
import FeatureHeader, { FeatureHeaderProps } from "./feature-header";
import React from "react";

interface FeatureSideImageProps extends FeatureHeaderProps {
  image: string;
  items: { image: string; title: string; description: string }[];
  flexReverse?: boolean;
}
export default function FeatureSideImage({
  title,
  subtitle,
  description,
  image,
  items,
  flexReverse = false,
}: FeatureSideImageProps) {
  return (
    <div className="flex flex-col p-24 gap-16">
      <FeatureHeader
        title={title}
        subtitle={subtitle}
        description={description}
      />

      <div
        className={`flex ${
          flexReverse ? "flex-row-reverse" : ""
        } justify-around items-start gap-x-8`}
      >
        <div className="flex flex-col grow gap-10">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-x-5">
              <Image
                src={item.image}
                width={48}
                height={48}
                alt="test1"
                className="object-contain"
              />

              <div className="flex flex-col gap-2 py-2.5">
                <h6 className="text-lg font-semibold">{item.title}</h6>
                <p className="text-neutral-600">
                  {item.description.split("<br />").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={image}
          width={592}
          height={394}
          alt={title}
          className="h-[394] object-cover"
        />
      </div>
    </div>
  );
}
