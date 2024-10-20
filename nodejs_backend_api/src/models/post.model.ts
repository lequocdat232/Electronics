import mongoose, { model } from "mongoose";
import { buildSlug } from "../helpers/buildSlug";

const postSchema = new mongoose.Schema(
  {
    post_name: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      require: false,
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
    isShowHome: {
      type: Boolean,
      default: false,
    },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
        comment: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    slug: {
      type: String,
      require: false,
      maxLength: 255,
      unique: true,
      trim: true,
    },
    post_description: {
      type: String,
      maxLength: 500,
      trim: true,
      require: false,
    },
  },

  {
    timestamps: true,
  }
);



postSchema.pre("save", function (next) {
  const post = this;
  if (post.post_name) {
    post.slug = buildSlug(post.post_name);
  }
  next();
});

const Post = model("Post", postSchema);
export default Post;
