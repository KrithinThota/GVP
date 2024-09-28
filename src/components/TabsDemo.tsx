"use client";
import { useRouter } from "next/navigation";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const router = useRouter();

  const tabs = [
    {
      title: "Class-A",
      value: "class-a",
      onClick: () => router.push("/dashboard/teachers/attendance/A"),
    },
    {
      title: "Class-B",
      value: "class-b",
      onClick: () => router.push("/dashboard/teachers/attendance/B"),
    },
  ];

  return (
    <>
      <div className="relative flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-8">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}
