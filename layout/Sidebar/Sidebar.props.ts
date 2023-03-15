import { ReactNode , DetailedHTMLProps, HTMLAttributes} from "react";

export interface LayoutProps extends DetailedHTMLProps<
HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>{
  children: ReactNode;
}
