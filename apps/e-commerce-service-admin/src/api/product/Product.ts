import { Recommendation } from "../recommendation/Recommendation";

export type Product = {
  createdAt: Date;
  id: string;
  recommendations?: Array<Recommendation>;
  updatedAt: Date;
};
