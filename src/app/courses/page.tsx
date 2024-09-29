import Courses from "@/components/Cources";
import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/landing-navbar1";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <Courses />
      <Footer />
    </div>
  );
}
