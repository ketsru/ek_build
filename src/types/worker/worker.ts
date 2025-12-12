

// types/worker.ts

import { Category } from "../category";
import { User } from "../user";
import { WorkerSkill } from "./skill";
import { WorkerImage } from "./worker_image";

// Props utilisées pour la card (tu peux les simplifier à ce dont la card a besoin)
export interface WorkersCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  experience?: string;
  category: Category; 
}

export interface Worker {
  category: any;
  id: string;
  title: string;
  description: string;
  image: string;
  user?: User;
  location:string;

  bio?: string;     
  experience?: string;

  mainCategory: Category;
  subCategories?: Category[];

  skills: WorkerSkill[];
  images: WorkerImage[];

  createdAt: string;
  updatedAt: string;
}
