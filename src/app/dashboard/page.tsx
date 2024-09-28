import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Form } from "@/components/Form";
import { Sidebars } from "@/components/SideBar";
import Dashboard from "@/components/Dashboard";
export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const user = await isAuthenticated();

  return (
    <>
      <div className="flex h-screen">
        <div className="w-[12%] h-screen">
          <Sidebars user={user} />
        </div>
        <div className="w-[88%] h-screen flex items-center justify-center">
          <div className="mx-auto my-auto align-middle items-center">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}
