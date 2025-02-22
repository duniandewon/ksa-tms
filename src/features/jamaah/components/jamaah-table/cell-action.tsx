"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { JamaahListingItem } from "@/types";

export interface CellAction { data: JamaahListingItem }

export function CellAction({ data }: CellAction) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='h-8 w-8 p-0'>
                    <span className='sr-only'>Open menu</span>
                    <Icons.moreHorizontal className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>

                <DropdownMenuItem
                    onClick={() => router.push(`/dashboard/jamaah/${data.id}`)}
                >
                    <Icons.edit className='mr-2 h-4 w-4' /> Update
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setOpen(true)}>
                    <Icons.trash className='mr-2 h-4 w-4' /> Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </>
}