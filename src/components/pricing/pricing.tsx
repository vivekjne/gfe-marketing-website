"use client";
import { useState } from "react";
import SectionHeader from "../ui/section-header";
import PricingTierItem from "./pricing-tier-item";

export enum PricingTerm {
  MONTHLY = "Monthly",
  ANNUALLY = "Annually",
}

function PricingTermButton({
  term,
  isActive,
  onClick,
}: {
  term: PricingTerm;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-2.5 px-4 bg-white text-neutral-900 font-medium text-base h-[48px] w-full md:w-auto text-center ${
        isActive
          ? "rounded border-[0.5px] border-solid border-neutral-200 shadow-sm"
          : ""
      }`}
    >
      {term}
    </button>
  );
}

export default function PricingSection() {
  const [pricingTerm, setPricingTerm] = useState<PricingTerm>(
    PricingTerm.MONTHLY
  );

  const getPrice = (price: number) => {
    return (pricingTerm === PricingTerm.ANNUALLY ? 10 : 1) * price;
  };
  return (
    <div>
      <div className="flex flex-col gap-y-10 py-12 px-3">
        <SectionHeader
          title="Pricing Tiers"
          subtitle="Fit for all your needs"
          description="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />

        <div className="flex justify-between md:justify-center gap-4">
          <PricingTermButton
            term={PricingTerm.MONTHLY}
            isActive={pricingTerm === PricingTerm.MONTHLY}
            onClick={() => setPricingTerm(PricingTerm.MONTHLY)}
          />
          <PricingTermButton
            term={PricingTerm.ANNUALLY}
            isActive={pricingTerm === PricingTerm.ANNUALLY}
            onClick={() => setPricingTerm(PricingTerm.ANNUALLY)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8">
          <PricingTierItem
            planTitle="Basic Plan"
            planDescription="Access to a curated selection of abstract images"
            price={getPrice(9.99)}
            term={pricingTerm}
            isActive={false}
            planFeatures={[
              "Standard quality images",
              "Limited to personal use",
              "Email support",
            ]}
          />

          <PricingTierItem
            planTitle="Standard Plan"
            planDescription="Next-level Integrations, priced economically"
            price={getPrice(19.99)}
            term={pricingTerm}
            isActive
            planFeatures={[
              "Expanded library with more diverse abstract images",
              "High-resolution images available",
              "Suitable for commercial use",
              "Priority email support",
              "Advanced analytics",
            ]}
          />

          <PricingTierItem
            planTitle="Premium Plan"
            planDescription="Experience limitless living for power users"
            price={getPrice(29.99)}
            term={pricingTerm}
            isActive={false}
            planFeatures={[
              "Full access to the entire image library, including exclusive content",
              "Highest quality images, including premium collections",
              "Commercial and resale rights",
              "Dedicated customer support line",
              "24/7 support response time",
              "Advanced analytics and insights",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
