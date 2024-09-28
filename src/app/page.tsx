import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { Hero } from "@/components/Hero";
import FooterComponent from "@/components/Credits";
import Perks from "@/components/Perks";
import Footer from "@/components/BottomFooter";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />

        <div className="flex-grow h-full overflow-y-auto items-center justify-center">
          <section className=" py-8 mt-8">
            <Hero />
          </section>
          <section className="border-t border-neutral-200 bg-neutral-50 mt-10 pt-10">
            <Perks />
          </section>
          <Footer />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
