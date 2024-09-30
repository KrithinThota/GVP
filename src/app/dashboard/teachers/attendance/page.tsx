import AccessDenied from "@/components/AccessDenied";
import UserTableSkeleton from "@/components/TableSkeleton";
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
    <div className="flex flex-col h-full">
      <div className="flex-none mb-4">
        <TabsDemo />
      </div>
      <div className="flex-grow overflow-y-auto justify-center items-center">
        <UserTableSkeleton />
      </div>
    </div>
  );
}
