"use client"
import { Button } from "@/components/ui/button";
import { JamaahListingItem } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<JamaahListingItem>[] = [{
    accessorKey: "name",
    header: "Nama",
}, {
    accessorKey: 'ktp',
    header: "KTP",
}, {
    accessorKey: "registrationDate",
    header: "Tanggal Registrasi",
}, {
    accessorKey: "status",
    header: "Status",
},
{
    id: "action",
    cell: ({ row }) => <CellAction data={row.original} />
}]