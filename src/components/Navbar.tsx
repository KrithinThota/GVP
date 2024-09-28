import Link from "next/link";
import { Ibarra_Real_Nova } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import DarkLight from "./DarkLight";

const Ibbara = Ibarra_Real_Nova({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/aboutus",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Admissions",
      href: "/admissions",
    },
  ];

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between fixed top-0 left-0 right-0 bg-neutral-100 bg-opacity-10 backdrop-blur-xl shadow-lg items-center z-50">
      <nav className="flex w-full screen-max-width items-center justify-between">
        <div className="flex items-center space-x-3 justify-start">
          <Link href="/">
            <Image
              src="/zoirw.png"
              alt="ZOIR Logo"
              width={40}
              height={40}
              className="inline-block rounded-full "
            />
          </Link>

          <Link
            href="/"
            className={cn(
              Ibbara.className,
              "text-xl font-bold text-neutral-700 hover:text-black"
            )}
          >
            ZOIR
          </Link>
        </div>

        <div className="flex flex-1 justify-end">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                Ibbara.className,
                "px-5 text-l font-semibold cursor-pointer text-neutral-700 hover:text-black transition-all"
              )}
            >
              {link.label}
            </Link>
          ))}
          {/* <DarkLight /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
