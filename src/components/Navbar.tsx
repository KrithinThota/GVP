import Link from "next/link";
import { Ibarra_Real_Nova } from "@next/font/google";
import { cn } from "@/lib/utils";
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
      label: "X",
      href: "/iphone",
    },
    {
      label: "Y",
      href: "/support",
    },
  ];

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between fixed bg-neutral-100 items-center">
      <nav className="flex w-full screen-max-width">
        <div className="flex flex-1 justify-center max-sm:hidden ">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                Ibbara.className,
                "px-5 text-l font-semibold cursor-pointer text-gray hover:text-white transition-all"
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
