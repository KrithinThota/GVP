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
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Add User</CardTitle>
            <CardDescription>Enter Student Info </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    placeholder="Max"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    placeholder="Robinson"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Class</Label>
                  <Input id="class" name="class" placeholder="A" required />
                </div>
              </div>
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

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
