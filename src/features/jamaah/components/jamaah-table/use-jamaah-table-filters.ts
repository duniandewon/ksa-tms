"use client"

import { useCallback, useMemo } from "react";

import { useQueryState } from "nuqs";
import { searchParams } from "@/lib/searchparams";

export const STATUS_OPTIONS = [
    { value: 'ba-calon', label: 'Bakal Calaon Jamaah' },
    { value: 'calon', label: 'Calon Jamaah' },
    { value: 'jamaah', label: 'Jamaah' },
    { value: 'alumni', label: 'Alumni' },
];

export function useJamaahTableFilter() {
    const [searchQuery, setSearchQuery] = useQueryState(
        'q',
        searchParams.q
            .withOptions({ shallow: false, throttleMs: 1000 })
            .withDefault('')
    );

    const [statusFilter, setStatusFilter] = useQueryState(
        'status',
        searchParams.status.withOptions({ shallow: false }).withDefault("")
    );

    const [page, setPage] = useQueryState(
        'page',
        searchParams.page.withDefault(0)
    );

    const [limit, setLimit] = useQueryState(
        'page',
        searchParams.limit.withDefault(10)
    );

    const resetFilters = useCallback(() => {
        setSearchQuery(null);
        setStatusFilter("jamaah");
        setPage(0);
        setLimit(10)
    }, [setSearchQuery, setStatusFilter, setPage, setLimit]);

    const isAnyFilterActive = useMemo(() => {
        return !!searchQuery || !!statusFilter;
    }, [searchQuery, statusFilter]);

    return {
        searchQuery, setSearchQuery,
        statusFilter, setStatusFilter,
        page, setPage,
        limit, setLimit,
        isAnyFilterActive,
        resetFilters
    }
}