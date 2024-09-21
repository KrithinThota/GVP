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
  name: string;
  selectedDate?: Date;
}

export default async function UserTable({
  name,
  selectedDate = new Date(),
}: UserTableProps) {
  const students = await getAttandance(name, selectedDate);

  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Class-{name}</CardTitle>
        <CardDescription>
          Attendance records for Class-{name} on {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
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
