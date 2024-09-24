import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const student = await getPermission("view:student");
  const teacher = await getPermission("view:admin");
  if (student?.isGranted) {
    redirect("/dashboard/students");
  }
  if (teacher?.isGranted) {
    redirect("/dashboard/teachers");
  }
}
