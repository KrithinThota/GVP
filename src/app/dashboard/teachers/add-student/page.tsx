import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Form } from "@/components/Form";
import AccessDenied from "@/components/AccessDenied";

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
    <div className="flex items-center justify-center w-full h-full">
      <Form />
    </div>
  );
}
