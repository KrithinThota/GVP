import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Form } from "@/components/Form";
import { Sidebars } from "@/components/SideBar";
export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  return (
    <>
      <div className="flex h-screen">
        <div className="w-[12%] h-screen">
          <Sidebars />
        </div>
        <div className="w-[88%] h-screen flex items-center justify-center">
          <div className="mx-auto my-auto align-middle items-center">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
