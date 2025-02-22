import Link from "next/link";
import { Suspense } from "react";

import { SearchParams } from "nuqs/server";

import { PageContainer } from "@/components/layout/page-container";

import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/headeing";
import { Separator } from "@/components/ui/separator";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";

import { searchParamsCache, serialize } from "@/lib/searchparams";
import { cn } from "@/lib/utils";

import { JamaahTableAction } from "@/features/jamaah/components/jamaah-table/jamaah-table-actions";
import { JamaahListing } from "@/features/jamaah/components/jamaah-listing";
import { Icons } from "@/components/icons";

export const metadata = {
    title: 'Dashboard: Jamaah'
};

interface PageProps {
    searchParams: Promise<SearchParams>;
};

export default async function Jamaah(props: PageProps) {
    const searchParams = await props.searchParams;

    searchParamsCache.parse(searchParams);

    const key = serialize({ ...searchParams });

    return <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
            <div className="flex justify-between">
                <Heading
                    title='Jamaah'
                    description='Data bakal calon jamaah, calon jamaah, jamaah dan alumni'
                />
                <Link
                    href='/dashboard/jamaah/new'
                    className={cn(buttonVariants(), 'text-xs md:text-sm')}
                >
                    <Icons.plus className='mr-2 h-4 w-4' /> Add New
                </Link>
            </div>
            <Separator orientation="horizontal" />
            <JamaahTableAction />
            <Suspense
                key={key}
                fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
            >
                <JamaahListing />
            </Suspense>
        </div>
    </PageContainer>
}