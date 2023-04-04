import { ProductModel } from "@/interfaces/product.interface";
import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
product: ProductModel;
}
