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
      <TabsDemo />
    </>
  );
}
