import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color?: "white" | "blue";
}
