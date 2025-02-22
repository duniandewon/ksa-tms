"use client"

import { useTransition } from "react";
import { Options } from "nuqs";

import { Input } from "../input";

import { cn } from "@/lib/utils";

interface DataTableSearchProps {
    searchKey: string;
    searchQuery: string;
    setSearchQuery: (
        value: string | ((old: string) => string | null) | null,
        options?: Options | undefined
    ) => Promise<URLSearchParams>;
    setPage: <Shallow>(
        value: number | ((old: number) => number | null) | null,
        options?: Options | undefined
    ) => Promise<URLSearchParams>;
}

export function DataTableSearch({
    searchKey,
    searchQuery,
    setSearchQuery,
    setPage
}: DataTableSearchProps) {
    const [isLoading, startTransition] = useTransition();

    const handleSearch = (value: string) => {
        setSearchQuery(value, { startTransition });
        setPage(0);
    };

    return (
        <Input
            placeholder={`Search ${searchKey}...`}
            value={searchQuery ?? ''}
            onChange={(e) => handleSearch(e.target.value)}
            className={cn('w-full md:max-w-sm', isLoading && 'animate-pulse')}
        />
    );
}