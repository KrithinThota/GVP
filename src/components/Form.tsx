"use client";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddUser } from "@/data-access/teacher";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(formRef.current!);
    const response = await AddUser(formData);

    if (response.message === "success") {
      formRef.current?.reset();
    }
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="align-middle">
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle className="text-xl">Add Student</CardTitle>
            <CardDescription>Enter Student Information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    placeholder="Max"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    placeholder="Robinson"
                    required
                  />
                </div>
              </div>

              {/* Class Dropdown */}
              <div className="grid gap-2">
                <Label htmlFor="class">Class</Label>
                <Select name="class" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Class A</SelectItem>
                    <SelectItem value="B">Class B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gender and Age Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select name="gender" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="18"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <Button type="submit" className="w-full mt-4">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
