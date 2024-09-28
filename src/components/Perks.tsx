import { Globe, GraduationCap, Library, ShieldCheck } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Perks() {
  const perks = [
    {
      name: "World-Class Education",
      Icon: GraduationCap,
      description:
        "Our programs are designed by top educators, ensuring you receive a comprehensive, high-quality education that prepares you for the future.",
    },
    {
      name: "Extensive Library Resources",
      Icon: Library,
      description:
        "Access our state-of-the-art digital and physical libraries, providing students with an extensive range of resources, books, and research materials.",
    },
    {
      name: "Safe and Secure Campus",
      Icon: ShieldCheck,
      description:
        "We prioritize student safety with 24/7 security, ensuring a safe and secure learning environment for everyone on campus.",
    },
    {
      name: "Global Opportunities",
      Icon: Globe,
      description:
        "Join a diverse and international community with opportunities to participate in global exchange programs and collaborative research projects worldwide.",
    },
  ];
  return (
    <>
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
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
    </>
  );
}
