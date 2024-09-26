import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Ibarra_Real_Nova } from "next/font/google";

const oldStandard = Ibarra_Real_Nova({
  weight: ["400", "700"],
  subsets: ["latin"],
});
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { Hero } from "@/components/Hero";
import FooterComponent from "@/components/footer";

export default function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description:
        "Get your assets delivered to your email in seconds and download them right away.",
    },
    {
      name: "Guaranteed Quality",
      Icon: CheckCircle,
      description:
        "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
    },
    {
      name: "For the Planet",
      Icon: Leaf,
      description:
        "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />

        <div className="flex-grow h-full overflow-y-auto items-center justify-center">
          <section className=" py-8 mt-8">
            <Hero />
          </section>
          <section className="border-t border-neutral-200 bg-neutral-50 mt-10 pt-10">
            <MaxWidthWrapper className="py-20">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                {perks.map((perk) => (
                  <div
                    key={perk.name}
                    className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                  >
                    <div className="md:flex-shrink-0 flex justify-center">
                      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-neutral-300 text-neutral-900">
                        {<perk.Icon className="w-1/3 h-1/3" />}
                      </div>
                    </div>

                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-base font-medium text-neutral-900">
                        {perk.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </MaxWidthWrapper>
          </section>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
