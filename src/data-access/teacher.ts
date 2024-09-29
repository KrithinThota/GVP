"use server"
import { cache } from "react";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getAttandance = async (classId: string, selectedDate: Date) => {

    const { isAuthenticated, getPermission } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      redirect("/api/auth/login");
    }
    const permission = await getPermission("view:admin");
    if (!permission?.isGranted) {
        redirect("/access-denied");
    }
    const students = await prisma.student.findMany({
        where: {
          class: classId,
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
};

export async function AddUser(formData:FormData){
  const { isAuthenticated, getPermission } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("view:admin");
  if (!permission?.isGranted) {
      redirect("/access-denied");
  }
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

export async function saveAttendance(
  studentId: string,
  selectedDate: Date,
  isPresent: boolean
) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("view:admin");
  if (!permission?.isGranted) {
    redirect("/access-denied");
  }

  const today = new Date().toISOString().split("T")[0]; // Today's date in "YYYY-MM-DD" format
  const selectedDateString = selectedDate.toISOString().split("T")[0];

  if (today === selectedDateString) {
    try {
      // Find existing attendance record
      const existingAttendance = await prisma.attendance.findFirst({
        where: {
          studentId: studentId,
          date: selectedDate, // Ensure we look for today's date
        },
      });

      if (existingAttendance) {
        // Update the existing record
        const updatedAttendance = await prisma.attendance.update({
          where: {
            id: existingAttendance.id, // Use the unique ID to update the record
          },
          data: {
            present: isPresent, // Update the attendance
          },
        });

        return updatedAttendance;
      } else {
        // Create a new attendance record if none exists for today
        const newAttendance = await prisma.attendance.create({
          data: {
            studentId,
            date: selectedDate,
            present: isPresent,
          },
        });

        return newAttendance;
      }
    } catch (error) {
      console.error("Error saving attendance:", error);
      throw new Error("Failed to save attendance");
    }
  } else {
    throw new Error("You can only modify today's attendance.");
  }
}

export async function getGrades(classId: string, examId: string) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("view:admin");
  if (!permission?.isGranted) {
    redirect("/access-denied");
  }

  const students = await prisma.student.findMany({
    where: {
      class: classId,
      grades: {
        some: {
          examId: examId,
        },
      },
    },
    include: {
      grades: {
        where: {
          examId: examId,
        },
      },
    },
  });

  return students;
}
export async function getExams() {
  return await prisma.exam.findMany();
}