import { Fragment } from "react";
import { CircleDollarSign, PlaneTakeoff, UsersRound } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { StatsCard } from "@/features/overview/components/stats-card";

export default function Overview({
  jamaah_table,
}: {
  jamaah_table: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">
          Hi Mohammad, Welcome back 👋
        </h2>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Revenue"
              icon={<CircleDollarSign size={14} />}
              content={
                <Fragment>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </Fragment>
              }
            />
            <StatsCard
              title="Jamaah"
              icon={<UsersRound size={14} />}
              content={
                <Fragment>
                  <div className="text-2xl font-bold">79350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </Fragment>
              }
            />
            <StatsCard
              title="Keberangkatan"
              icon={<PlaneTakeoff size={14} />}
              content={
                <Fragment>
                  <div className="text-2xl font-bold">2451</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </Fragment>
              }
            />
            <StatsCard
              title="Jamaah"
              icon={<UsersRound size={14} />}
              content={
                <Fragment>
                  <div className="text-2xl font-bold">2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </Fragment>
              }
            />
          </div>
          <div>{jamaah_table}</div>
        </div>
      </div>
    </PageContainer>
  );
}
