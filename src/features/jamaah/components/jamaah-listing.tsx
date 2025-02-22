import { JamaahListingItem } from "@/types";

import { DataTable } from "@/components/ui/table/data-table";

import { columns } from "./jamaah-table/jamaah-table-columns";

import { searchParamsCache } from "@/lib/searchparams";
import { getJamaah } from "../actions/getJamaah";

interface JamaahListing { }

export async function JamaahListing() {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const limit = searchParamsCache.get('limit');
  const status = searchParamsCache.get('status');

  const filters = {
    page,
    limit,
    ...(search && { search }),
    ...(status && { status: status }),
  };

  const jamaah = await getJamaah({
    limit: filters.limit,
    offset: (filters.page < 1 ? filters.page : filters.page - 1) * 10,
    query: filters.search,
    status: filters.status
  })

  const mappedData: JamaahListingItem[] = jamaah.data?.map(jam => ({
    id: jam.id?.toString() || "",
    ktp: jam.ktp || "",
    name: jam.name || "",
    status: jam.status || "ba-calon",
    registrationDate: jam.dateJoined?.toDateString() || "",
  }));

  const totalItems = jamaah.pagination.total

  return <DataTable columns={columns} data={mappedData} totalItems={totalItems} />;
}