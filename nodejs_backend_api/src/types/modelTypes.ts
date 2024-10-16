import { ObjectId } from "mongoose";

// Topic
export interface ITopic extends Document {
  topic_name: string;
  category: ObjectId;
  topic_description?: string;
}
