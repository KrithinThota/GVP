import Departments from "@/components/departments";
import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/landing-navbar1";

export default function Home() {
  return (
    <div>
      <NavigationMenuDemo />
      <Departments />
      <Footer />
    </div>
  );
}
