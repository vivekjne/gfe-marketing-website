import FeatureItem from "./features-item";

const featureItemsData: { heading: string; description: string }[] = [
  {
    heading: "Infinite Download",
    description:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more.",
  },
  {
    heading: "Purely Handcrafted",
    description:
      " No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.",
  },
  {
    heading: "All Are Under licensed",
    description:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).",
  },
  {
    heading: "Cancel Anytime",
    description:
      "Subscribe at your own pace, and cancel when you feel it's enough.",
  },
  {
    heading: "Empowering For Team",
    description:
      "We support multiple seats at once, requiring only a single payment.",
  },
  {
    heading: "No Limitations",
    description:
      "Use as many as you want, from Dribbble presentations to PowerPoint presentations.",
  },
];
export default function FeaturesSection() {
  return (
    <section id="features" className="p-24">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="font-semibold text-indigo-700">
            Premium abstract images
          </h3>
          <p className="text-5xl font-semibold">
            Easy access to top quality images
          </p>
          <p className="text-xl text-neutral-600 text-center">
            In a world where storytelling constantly evolves, we lead with
            groundbreaking images <br /> designed for your presentation
            excellence.
          </p>
        </div>

        {/* features grid */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-8">
          {featureItemsData.map((feature, i) => (
            <FeatureItem
              key={feature.heading}
              image={`/img/features/feature-${i + 1}.png`}
              imageAlt={feature.heading}
              heading={feature.heading}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
