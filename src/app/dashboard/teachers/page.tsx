import AccessDenied from "@/components/AccessDenied";
import { Sidebars } from "@/components/SideBar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DarkLight from "@/components/DarkLight";
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
      <div className="w-full h-full items-center align-middle bg-neutral-200">
        <p className="text-center align-middle my-auto ">PROFILE</p>
        <h1>Login as:{user.email}</h1>
        <p>{user.id}</p>
        <p>{user.family_name}</p>
        <p>{user.given_name}</p>
        <p>{user.username}</p>
        <p>{user.phone_number}</p>
        <p>{user.properties?.usr_city}</p>
        <p>{user.properties?.kp_usr_industry}</p>
        <p>{user.properties?.job_title}</p>

        {/* <DarkLight /> */}
      </div>
    </>
  );
}
