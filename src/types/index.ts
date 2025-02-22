import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}

export type Status = "ba-calon" | "calon" | "jamaah" | "alumni"

export interface JamaahListingItem {
  id: string
  ktp: string
  name: string
  status: Status
  registrationDate: string
}