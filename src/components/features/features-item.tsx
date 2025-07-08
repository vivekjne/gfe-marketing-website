import Image from "next/image";

interface FeatureItemProps {
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
}
export default function FeatureItem({
  image,
  imageAlt,
  heading,
  description,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Image src={image} width={48} height={48} alt={imageAlt} />
      <h6 className="text-xl font-semibold text-center">{heading}</h6>
      <p className="text-neutral-600 text-center">{description}</p>
    </div>
  );
}
