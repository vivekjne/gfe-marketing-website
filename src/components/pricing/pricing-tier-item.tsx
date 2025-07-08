import Image from "next/image";
import { PricingTerm } from "./pricing";

interface PricingTierItemProps {
  planTitle: string;
  planDescription: string;
  price: number;
  term: PricingTerm;
  planFeatures: string[];
  isActive: boolean;
}
export default function PricingTierItem({
  planTitle,
  planDescription,
  price,
  term,
  planFeatures,
  isActive,
}: PricingTierItemProps) {
  const getTermInfo = (term: PricingTerm) => {
    if (term === PricingTerm.MONTHLY) {
      return "month";
    }

    if (term === PricingTerm.ANNUALLY) {
      return "year";
    }
  };

  const getFormattedPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  return (
    <div
      className={`flex flex-col justify-between border border-solid rounded-lg overflow-hidden h-[676px] ${
        !isActive ? "border-neutral-200" : "border-indigo-600 shadow-2xl"
      }`}
    >
      {isActive && (
        <div className="flex justify-center items-center gap-2 bg-indigo-50 px-2 py-4">
          <span className="text-indigo-700 text-xl font-bold">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex flex-col p-4 gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-2xl font-semibold">{planTitle}</h3>
          <p className="text-neutral-600">{planDescription}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p>
            <strong className="text-5xl font-semibold">
              {getFormattedPrice(price)}
            </strong>{" "}
            / <span>{getTermInfo(term)}</span>
          </p>
          <span className="text-neutral-600">
            {isActive ? "Prices in USD" : "Billed monthly"}
          </span>
        </div>

        <div className="flex flex-col gap-y-5">
          {planFeatures.map((feature: string) => (
            <div className="flex items-center gap-x-4" key={feature}>
              <Image
                src="/img/check-fill.png"
                width={24}
                height={24}
                className="w-6 h-6"
                alt={feature}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className={`cursor-pointer mx-4 mb-8 py-2.5 px-4  rounded border-[0.5px] border-solid border-neutral-200 shadow-sm font-medium text-base h-[48px] text-center ${
          isActive ? "bg-indigo-700 text-white" : "bg-white text-neutral-900"
        }`}
      >
        Buy now
      </button>
    </div>
  );
}
