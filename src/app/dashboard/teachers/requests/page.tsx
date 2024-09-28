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
      <div className="flex h-full items-center justify-center w-full">
        <div className="mx-auto my-auto align-middle items-center">
          <p className="text-center align-middle my-auto ">REQUESTS</p>
          <div>Logged in as:{user.email}</div>{" "}
        </div>
      </div>
    </>
  );
}
