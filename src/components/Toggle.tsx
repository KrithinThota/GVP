"use client";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { saveAttendance } from "@/data-access/teacher";

interface AttendanceToggleProps {
  studentId: string;
  defaultAttendance: boolean;
  selectedDate: Date;
  isToday: boolean;
}

export default function AttendanceToggle({
  studentId,
  defaultAttendance,
  selectedDate,
  isToday,
}: AttendanceToggleProps) {
  const [isPresent, setIsPresent] = useState(defaultAttendance);
  const [isModified, setIsModified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsPresent(defaultAttendance); // Sync state with props
  }, [defaultAttendance]);

  const handleToggle = async () => {
    const updatedAttendance = !isPresent; // Capture the new value here before setting the state
    setIsPresent(updatedAttendance);

    if (isToday) {
      await saveAttendanceToServer(updatedAttendance);
    } else {
      setIsModified(true);
    }
  };

  const saveAttendanceToServer = async (updatedAttendance: boolean) => {
    try {
      await saveAttendance(studentId, selectedDate, updatedAttendance);

      setIsModified(false);
      toast({
        title: "Success",
        description: "Attendance saved successfully.",
      });

      router.refresh();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to save attendance.",
      });
    }
  };

  return (
    <>
      <Switch checked={isPresent} onCheckedChange={handleToggle} />
      {!isToday && isModified && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="ml-2">
              Save
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Confirm Attendance Change</DialogTitle>
            <DialogDescription>
              Are you sure you want to save the changes to this attendance
              record?
            </DialogDescription>
            <Button onClick={() => saveAttendanceToServer(isPresent)}>
              Confirm
            </Button>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
