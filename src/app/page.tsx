import FeaturesSection from "@/components/features/features";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="banner"
        className="flex flex-col px-4 py-16 gap-y-8 lg:items-center lg:justify-center lg:px-24 lg:py-24 lg:flex-row lg:gap-y-0"
      >
        <div className="flex flex-col grow gap-8 md:gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-semibold text-neutral-900">
              Well crafted <br /> abstract images
            </h2>
            <p className="text-lg md:text-xl text-neutral-600">
              High quality abstract images for your projects, <br />
              wallpaper and presentations.
            </p>
          </div>

          <div className="flex justify-between md:justify-normal gap-4 md:gap-8">
            <Link
              href={"/learn-more"}
              className="py-2.5 px-4 bg-white text-neutral-900 rounded border-[0.5px] border-solid border-neutral-200 shadow-sm font-medium text-base h-[48px] w-full md:w-auto text-center"
            >
              Learn more
            </Link>
            <Link
              href={"/learn-more"}
              className="py-2.5 px-4 bg-indigo-700 text-white rounded border-[0.5px] border-solid border-neutral-200 shadow-sm font-medium text-base h-[48px] w-full md:w-auto text-center"
            >
              See pricing
            </Link>
          </div>
        </div>
        <Image
          src={"/img/prism.png"}
          width={696}
          height={526}
          className="object-cover h-[264px] w-full md:h-[526] lg:w-[696px]"
          alt="abstract"
        />
      </section>

      {/* Social proof section */}
      <section id="social-proof" className="p-y-24 flex flex-col gap-y-8">
        <p className="text-neutral-600 text-center text-base">
          Used by teams that you love
        </p>
        <div className="flex overflow-x-auto ">
          {Array.from({ length: 8 }, (_, i) => (
            <Image
              key={i}
              src={i > 0 ? `img/logos/logo-${i}.svg` : "img/logos/logo.svg"}
              width={218}
              height={96}
              alt={`logo-i`}
            />
          ))}
        </div>
      </section>

      <FeaturesSection />
    </>
  );
}
