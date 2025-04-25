import mongoose, { Schema } from "mongoose";
import { Book } from "./book.model.js";
import { User } from "./user.model.js";

const reviewSchema = new Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  refinedComment: String, // optional: for GPT-refined version
  submittedVersion: {
    type: String,
    enum: ["original", "refined"],
    default: "original",
  },
  createdAt: { type: Date, default: Date.now },
});

export const Review = mongoose.model("Review", reviewSchema);
