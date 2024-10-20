import { model, Schema } from "mongoose";
import { buildSlug } from "../helpers/buildSlug";

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
  thumbnail: {
    type: String,
    require: false,
  },
  topic_description: {
    type: String,
    maxlength: 500,
    trim: true,
    required: false,
  },
  slug: {
    type: String,
    require: false,
    maxLength: 255,
    unique: true,
    trim: true,
  },
});

topicSchema.pre("save", function (next) {
  const topic = this;
  if (topic.topic_name) {
    topic.slug = buildSlug(topic.topic_name);
  }
  next();
});

const Topic = model("Topic", topicSchema);
export default Topic;
