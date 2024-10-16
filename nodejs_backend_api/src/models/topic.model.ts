import { model, Schema } from "mongoose";

const topicSchema = new Schema({
  topic_name: {
    type: String,
    maxlength: 255,
    unique: true,
    trim: true,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  topic_description: {
    type: String,
    maxlength: 500,
    trim: true,
    required: false,
  },
});

const Topic = model("Topic", topicSchema);
export default Topic;
