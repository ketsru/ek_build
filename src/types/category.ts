

import { ComponentType, ReactNode, SVGProps } from "react";

export interface Category {
  id: string;
  name: string;
  parentId?: string; // sous-catégories
  subCategories?: Category[];
  icon?: ComponentType<SVGProps<SVGSVGElement>>; // JSX icon
}
