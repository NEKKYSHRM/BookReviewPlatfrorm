import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  coverImage: String,
  genre: [String],
  averageRating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const Book = mongoose.model("Book", bookSchema);
