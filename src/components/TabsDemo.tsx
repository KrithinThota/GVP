import { Tabs } from "@/components/ui/tabs";
import UserTable from "./UserTable";

export function TabsDemo() {
  const tabs = [
    {
      title: "Class-A",
      value: "class-a",
      content: <UserTable name="A" />,
    },
    {
      title: "Class-B",
      value: "class-b",
      content: <UserTable name="B" />,
    },
    {
      title: "Class-C",
      value: "class-c",
      content: <UserTable name="C" />,
    },
  ];

  return (
    <div className="h-[50rem] md:h-[50rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-8">
      <Tabs tabs={tabs} />
    </div>
  );
}
