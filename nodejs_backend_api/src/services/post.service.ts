import { ObjectId } from "mongoose";
import Post from "../models/post.model";
import createError from "http-errors";

type TComment = {
  user: ObjectId; // Tham chiếu đến `Staff`
  comment: string; // Nội dung bình luận
  createdAt: Date; // Ngày tạo bình luận
};
type TPost = {
  _id: ObjectId; // ID của bài viết
  title: string; // Tiêu đề bài viết
  content: string; // Nội dung bài viết
  category: ObjectId; // ID của danh mục
  isPublished: boolean; // Trạng thái xuất bản
  publishedAt: Date; // Ngày xuất bản
  comments: TComment[]; // Mảng bình luận
  createdAt: Date; // Ngày tạo bài viết
  updatedAt: Date; // Ngày cập nhật bài viết
};

const findAll = async ({ page, limit }) => {
  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const skip = (pageNumber - 1) * limitNumber;

  const posts = await Post.find()
    .skip(skip)  // Bỏ qua các bản ghi trước đó
    .limit(limitNumber)  // Giới hạn số lượng bản ghi trả về

  return posts;
};
const countAll = async () => {
  const totalRecords = await Post.countDocuments();
  return totalRecords;
};

const findById = async (id: string) => {
  const post = await Post.findById(id, "-__v -id");
  if (!post) {
    throw createError(400, "Post not found!");
  }
  return post;
};

const updateById = async (id: string, payload: any) => {
  const post = await findById(id);
  Object.assign(post, payload);
  await post.save();
  return post;
};

const deleteById = async (id: string) => {
  const post = await findById(id);
  await Post.deleteOne({ _id: post._id });
  return post;
};

const createDocument = async (payloads: TPost) => {
  const post = await Post.create(payloads);

  return post;
};
// const createDocument = async (body: any) => {
//   // Kiểm tra xem title, content và category có tồn tại không
//   if (!body.title || !body.content || !body.category) {
//     throw new Error("Missing required fields: title, content, or category");
//   }

//   const payloads = {
//     title: body.title,
//     content: body.content,
//     category: body.category,
//     comments: body.comments || [], // Nếu không có comments, mặc định là mảng rỗng
//   };

//   // Tạo bài viết mới
//   const post = await Post.create(payloads);
//   return post;
// };

export default {
  findAll,
  countAll,
  findById,
  updateById,
  deleteById,
  createDocument,
};
