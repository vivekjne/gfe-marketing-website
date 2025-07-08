import FeatureHeader from "./feature-header";
import FeatureSideImage from "./feature-side-image";
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
    <section id="features">
      <div className="flex flex-col gap-12 md:gap-16 px-3 py-12 md:px-24 md:py-24">
        <FeatureHeader
          title="Premium abstract images"
          subtitle="Easy access to top quality images"
          description="In a world where storytelling constantly evolves, we lead with
            groundbreaking images <br /> designed for your presentation
            excellence."
        />

        {/* features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
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

      <FeatureSideImage
        title="High quality images"
        subtitle="For designers, by designers"
        description="Unleash boundless creativity with a large repository of images optimized for designers"
        image="/img/features/feature-side-1.png"
        items={[
          {
            title: "5K resolution support",
            description:
              "All images boast a minimum resolution of 5K, ensuring crisp, crystal-<br />clear quality.",
            image: "/img/features/side-image-1/1.png",
          },

          {
            title: "From water to glass",
            description:
              "We offer a wide array of abstractions, ranging from water to glass,<br /> and encompassing various styles including 3D and vector.",
            image: "/img/features/side-image-1/2.png",
          },
          {
            title: "Portrait or landscape",
            description:
              "Effortlessly adapt your images for any platform - whether it's a<br /> stunning wallpaper or captivating Instagram reels and stories.",
            image: "/img/features/side-image-1/3.png",
          },
        ]}
      />

      <FeatureSideImage
        flexReverse
        title="Best-in-class support"
        subtitle="Convenience and licensing that empowers"
        description="In a world where storytelling constantly evolves, <br /> don't let licensing and poor support hold you down."
        image="/img/features/feature-side-2.png"
        items={[
          {
            title: "Faster downloads",
            description:
              "Our robust servers are primed to deliver the highest resolution<br /> images swiftly, ensuring a smooth download experience.",
            image: "/img/features/side-image-1/1.png",
          },

          {
            title: "Convenience for teams",
            description:
              "Your single account can accommodate multiple users simultaneously<br /> downloading without any disruptions, streamlining teamwork and<br /> productivity.",
            image: "/img/features/side-image-1/2.png",
          },
          {
            title: "Royalty-free licensing",
            description:
              "Our straightforward, royalty-free licensing means your chosen<br /> images are yours to innovate with, without the hassle of negotiating<br /> usage rights for every new project.",
            image: "/img/features/side-image-1/3.png",
          },
        ]}
      />
    </section>
  );
}
