"use client"

import { DataTableFilterBox } from "@/components/ui/table/data-table-filter-box"
import { DataTableSearch } from "@/components/ui/table/data-table-search"
import { STATUS_OPTIONS, useJamaahTableFilter } from "./use-jamaah-table-filters"

export function JamaahTableAction() {
    const { isAnyFilterActive, limit, page, resetFilters, searchQuery, setLimit, setPage, setSearchQuery, setStatusFilter, statusFilter } = useJamaahTableFilter()

    return <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
            searchKey='name, ktp, nik...'
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setPage={setPage}
        />
        <DataTableFilterBox
            filterKey='Status'
            title='Filter Status'
            options={STATUS_OPTIONS}
            setFilterValue={setStatusFilter}
            filterValue={statusFilter}
        />
    </div>
}