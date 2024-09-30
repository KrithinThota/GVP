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
    <Card className="relative bg-neutral-300 flex flex-col md:max-w-7xl mx-auto  min-h-[60%] md:min-h-[80%] max-w-[90%] items-start justify-start my-12 md:my-8 md:py-2 animate-pulse">
      <div className=" h-full w-full flex "></div>
    </Card>
  );
}
