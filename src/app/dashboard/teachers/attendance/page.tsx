import AccessDenied from "@/components/AccessDenied";
import { Sidebars } from "@/components/SideBar";
import { TabsDemo } from "@/components/TabsDemo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("view:admin");
  if (!permission?.isGranted) {
    return <AccessDenied />;
  }
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
