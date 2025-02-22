import db from "@/db/drizzle";
import { profile, user } from "@/db/schema";
import { and, eq, ilike, or, sql, SQL } from "drizzle-orm";

interface Props {
    query?: string
    status?: "ba-calon" | "calon" | "jamaah" | "alumni"
    limit?: number
    offset?: number
}

export async function getJamaah({ limit = 10, offset = 0, query, status }: Props) {
    const conditions: SQL[] = []

    if (query?.trim()) {
        const searchTerm = `%${query}%`

        const searchCondition = or(
            ilike(profile.name, searchTerm),
            ilike(profile.ktp, searchTerm),
            ilike(profile.nik, searchTerm),
            ilike(user.phone, searchTerm),
            ilike(user.email, searchTerm)
        );

        if (searchCondition) conditions.push(searchCondition);
    }

    if (status) {
        conditions.push(eq(user.status, status));
    }
    
    let jamaahQuery = db
        .select({
            id: user.id,
            name: profile.name,
            ktp: profile.ktp,
            status: user.status,
            dateJoined: user.createdAt
        })
        .from(user)
        .fullJoin(profile, eq(user.id, profile.userId))
        .where(conditions.length > 0 ? and(...conditions) : undefined)
        .limit(limit)
        .offset(offset)

    const totalCountQuery = db
        .select({ count: sql`count(distinct ${user.id})` })
        .from(user)
        .fullJoin(profile, eq(user.id, profile.userId))
        .where(conditions.length > 0 ? and(...conditions) : undefined)

    const [result, totalCount] = await Promise.all([jamaahQuery.execute(), totalCountQuery.execute()])

    return {
        data: result,
        pagination: {
            total: Number(totalCount[0]?.count || 0),
            limit,
            offset,
            hasMore: result.length === limit
        }
    }
}