import { Sidebars } from "@/components/SideBar";
import { TabsDemo } from "@/components/TabsDemo";

export default async function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[12%] h-screen">
          <Sidebars />
        </div>

        <div className="w-[88%] h-screen overflow-y-auto">
          <TabsDemo />
        </div>
      </div>
    </>
  );
}
