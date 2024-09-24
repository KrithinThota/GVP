import AccessDenied from "@/components/AccessDenied";
import { Sidebars } from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { log } from "console";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, getUser, getPermission } = getKindeServerSession();
  const user = await getUser();
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
        <div className="w-[88%] h-screen flex items-center justify-center">
          <div className="w-full h-full items-center align-middle bg-neutral-200">
            <p className="text-center align-middle my-auto ">PROFILE</p>
            <div>Logged in as:{user.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}
