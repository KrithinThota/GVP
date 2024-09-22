import { Sidebars } from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const { isAuthenticated, getUser, getPermission } = getKindeServerSession();
  const user = await getUser();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("view:profile");
  if (!permission?.isGranted) {
    return <div>Access Denied</div>;
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
            <h1>Login as:{user.email}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
