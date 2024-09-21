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
      <Sidebars>
        <div className="w-full h-full items-center align-middle bg-neutral-200">
          <p className="text-center align-middle my-auto ">REQUESTS</p>
          <div>Logged in as:{user.email}</div>
        </div>
      </Sidebars>
    </>
  );
}
