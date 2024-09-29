import Navbar from "@/components/Navbar";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex bg-background items-center justify-center h-screen ">
        <Navbar />

        <div className="text-center align-middle ">
          <Table>
            <TableCaption>
              Fee Structure for B.Tech. / M.Tech. / MCA Courses (From 2020-21 to
              2022-23 Admitted)
            </TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
