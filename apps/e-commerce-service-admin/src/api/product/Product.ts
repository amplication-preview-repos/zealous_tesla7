import { Feedback } from "../feedback/Feedback";
import { Recommendation } from "../recommendation/Recommendation";

export type Product = {
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  recommendations?: Array<Recommendation>;
  updatedAt: Date;
};
