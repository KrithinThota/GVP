import { Hero } from "@/components/Hero";
import Perks from "@/components/Perks";
import BottomFooter from "@/components/footer";
import Credits from "@/components/Credits";
import { NavigationMenuDemo } from "@/components/landing-navbar1";
import { InfiniteMovingCardsDemo } from "@/components/landing-moving";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen">
        <NavigationMenuDemo />

        <div className="flex-grow h-full overflow-y-auto items-center justify-center">
          <section className=" py-8 mt-8">
            <Hero />
          </section>

          <div className="py-4">
            <InfiniteMovingCardsDemo />
          </div>
          <section className="border-t border-neutral-200 bg-neutral-50 mt-10 pt-10">
            <Perks />
          </section>
          <BottomFooter />
        </div>
      </div>
      <Credits />
    </>
  );
}
