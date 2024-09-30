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

export default function UserTableSkeleton() {
  return (
    <Card className="relative flex flex-col md:max-w-7xl mx-auto min-h-[60%] w-full items-start justify-start my-8 py-2">
      <div className="bg-neutral-600 h-full w-full flex "></div>
    </Card>
  );
}
