import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment, ReactNode } from "react";

export interface StatsCard {
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

export function StatsCard({content, icon, title}: StatsCard) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Fragment>{icon}</Fragment>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
