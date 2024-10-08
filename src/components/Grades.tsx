"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGrades, getExams } from "@/data-access/teacher";

type Exam = Awaited<ReturnType<typeof getExams>>[number];

type Student = Awaited<ReturnType<typeof getGrades>>[number];

export default function Grades() {
  const [selectedClassId, setSelectedClassId] = useState("A");
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [mode, setMode] = useState<"see" | "edit">("see");
  const [students, setStudents] = useState<Student[]>([]);
  const [exams, setExams] = useState<Exam[]>([]);

  const classOptions = ["A", "B"];

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const examData = await getExams();
        const examArray = Object.values(examData);
        setExams(examArray);
        if (examArray.length > 0) {
          setSelectedExamId(examArray[0].id);
        }
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    fetchExams();
  }, []);

  useEffect(() => {
    const fetchGrades = async () => {
      if (selectedExamId && selectedClassId) {
        try {
          const grades = await getGrades(selectedClassId, selectedExamId);
          setStudents(grades);
        } catch (error) {
          console.error("Error fetching grades:", error);
        }
      }
    };

    fetchGrades();
  }, [selectedClassId, selectedExamId]);

  return (
    <div className="w-full">
      <div className="flex felx-col px-32 mb-4">
        <select
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
          className="border p-2 rounded"
        >
          {classOptions.map((classId) => (
            <option key={classId} value={classId}>
              Class {classId}
            </option>
          ))}
        </select>

        <select
          value={selectedExamId ?? ""}
          onChange={(e) => setSelectedExamId(e.target.value)}
          className="border p-2 rounded"
          disabled={exams.length === 0}
        >
          {exams.map((exam) => (
            <option key={exam.id} value={exam.id}>
              {exam.name}
            </option>
          ))}
        </select>

        <Button
          onClick={() => setMode((prev) => (prev === "see" ? "edit" : "see"))}
        >
          {mode === "see" ? "Switch to Edit Mode" : "Switch to See Mode"}
        </Button>
      </div>

      <Card className="relative flex flex-col md:max-w-7xl mx-auto w-full items-start justify-start my-8 py-2">
        <CardHeader>
          <CardTitle>Grades</CardTitle>
          <CardDescription>
            Class {selectedClassId} Grades for{" "}
            {exams.find((e) => e.id === selectedExamId)?.name || "Exam"}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead className="hidden md:table-cell">Grades</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="hidden md:table-cell">ID</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Student image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/zoir.png"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {student.firstName} {student.lastName}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {student.firstName}
                  </TableCell>
                  <TableCell>
                    {student.grades.length > 0 ? (
                      student.grades.map((grade) => (
                        <Badge
                          key={grade.id}
                          variant="outline"
                          className="mr-2"
                        >
                          {mode === "see" ? (
                            grade.grade
                          ) : (
                            <input
                              type="text"
                              defaultValue={grade.grade}
                              className="border p-1 w-12 text-center"
                            />
                          )}
                        </Badge>
                      ))
                    ) : (
                      <Badge variant="outline">No grades available</Badge>
                    )}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {student.email}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {student.id}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{students.length}</strong> of{" "}
            <strong>{students.length}</strong> students
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
