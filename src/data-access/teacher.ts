
"use server";
import { cache } from "react";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Fetch attendance records for a specific class and date
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

// Function to add a new user (student)
export async function AddUser(formData: FormData) {
  await prisma.student.create({
    data: {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      class: formData.get('class') as string,
    },
  });
  revalidatePath('/api/teachers/add-student');
  return {
    message: "success",
  };
}

// Save attendance for a student for a specific date
export async function saveAttendance(
  studentId: string,
  selectedDate: Date,
  isPresent: boolean
) {
  const { isAuthenticated, getPermission } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const permission = await getPermission("update:grades");
  if (!permission?.isGranted) {
    redirect("/access-denied");
  }

  try {
    // Find existing attendance record for the selected date
    const existingAttendance = await prisma.attendance.findFirst({
      where: {
        studentId: studentId,
        date: selectedDate, // Check for the selected date
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
      // Create a new attendance record if none exists for the selected date
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
}

