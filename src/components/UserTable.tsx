
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AttendanceToggle from "./Toggle";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { getAttandance } from "@/data-access/teacher";
import DatePicker from "@/components/ui/DatePicker";

interface UserTableProps {
  name: string;
}

export default function UserTable({ name }: UserTableProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [students, setStudents] = useState([]); // State to store the students
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchAttendanceForDate = async (date: Date) => {
      if (!date) return;

      setLoading(true); // Show loading state while fetching
      const formattedDate = new Date(date);

      const data = await getAttandance(name, formattedDate);
      setStudents(data);
      setLoading(false); // Hide loading state after fetching
    };

    fetchAttendanceForDate(selectedDate);
  }, [selectedDate, name]);

  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Class-{name}</CardTitle>
        <CardDescription>
          Attendance records for Class-{name} on {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)} // Set the selected date
            placeholderText="Select a date"
          />
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead className="hidden sm:table-cell">First Name</TableHead>
                <TableHead className="hidden sm:table-cell">Last Name</TableHead>
                <TableHead className="hidden md:table-cell">ID</TableHead>
                <TableHead className="text-right">Attendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => {
                const attendance = student.attendance[0]?.present ?? false;

                return (
                  <TableRow key={student.id} className="bg-accent">
                    <TableCell>
                      <div className="font-medium">
                        {student.firstName} {student.lastName}
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {student.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.firstName}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {student.lastName}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {student.id}
                    </TableCell>
                    <TableCell className="text-right">
                      <AttendanceToggle
                        studentId={student.id}
                        defaultAttendance={attendance} // Only toggle for attendance
                        selectedDate={selectedDate || new Date()} 
                        isToday={format(selectedDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
