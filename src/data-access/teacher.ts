"use server"
import { cache } from "react";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getAttandance = cache(async (name: string, selectedDate: Date) => {

    const { isAuthenticated, getPermission } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }
    const permission = await getPermission("update:grades");
    if (!permission?.isGranted) {
        redirect("/access-denied");
    }
    const students = await prisma.student.findMany({
        where: {
          class: name,
        },
        include: {
          attendance: {
            where: {
              date: selectedDate,
            },
          },
        },
      });
      return students;
});

export async function saveAttendance(studentId: string, selectedDate: Date, isPresent: boolean) {
    const { isAuthenticated, getPermission } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }
    const permission = await getPermission("update:grades");
    if (!permission?.isGranted) {
        redirect("/access-denied");
    }

    try {
      const attendanceRecord = await prisma.attendance.upsert({
        where: {
          studentId_date: {
            studentId,
            date: selectedDate,
          },
        },
        update: {
          present: isPresent,
        },
        create: {
          studentId,
          date: selectedDate,
          present: isPresent,
        },
      });
  
      return attendanceRecord;
    } catch (error) {
      console.error("Error saving attendance:", error);
      throw new Error("Failed to save attendance");
    }
  }

export async function AddUser(formData:FormData){
    await prisma.student.create({
        data: {
            firstName: formData.get('first-name') as string,
            lastName:   formData.get('last-name') as string,
            email: formData.get('email') as string,
            class: formData.get('class') as string,
        },
    });
    revalidatePath('/api/teachers/add-student');
    return{
        message: "success",
    }
}