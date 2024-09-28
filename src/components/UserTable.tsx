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
import { getAttandance } from "@/data-access/teacher";

interface UserTableProps {
  classId: string;
  selectedDate?: Date;
}

export default async function UserTable({
  classId,
  selectedDate = new Date(),
}: UserTableProps) {
  const students = await getAttandance(classId, selectedDate);
  console.log("Fetched students:", students);

  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  return (
    <Card className="relative flex flex-col md:max-w-7xl mx-auto w-full items-start justify-start my-8 py-2">
      <CardHeader>
        <CardTitle>Class-{classId}</CardTitle>
        <CardDescription>
          Attendance records for Class-{classId} on {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="table-fixed w-full">
          {" "}
          {/* Add table-fixed class */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">User</TableHead>{" "}
              {/* Set width for columns */}
              <TableHead className="hidden sm:table-cell w-1/4">
                First Name
              </TableHead>
              <TableHead className="hidden sm:table-cell w-1/4">
                Last Name
              </TableHead>
              <TableHead className="w-1/4 text-right">Attendance</TableHead>
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
                  <TableCell className="text-right">
                    <AttendanceToggle
                      studentId={student.id}
                      defaultAttendance={attendance}
                      selectedDate={selectedDate}
                      isToday={
                        selectedDate.toDateString() ===
                        new Date().toDateString()
                      }
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
