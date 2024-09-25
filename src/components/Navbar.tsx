import Link from "next/link";
import { Ibarra_Real_Nova } from "next/font/google";
import { cn } from "@/lib/utils";

// Google Font
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
      label: "AboutUs",
      href: "/aboutus",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between fixed top-0 left-0 right-0 bg-neutral-100/80 backdrop-blur-md shadow-lg items-center z-50">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                Ibbara.className,
                "px-5 text-l font-semibold cursor-pointer text-gray-800 hover:text-black transition-all"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
