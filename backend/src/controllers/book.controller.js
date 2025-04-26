import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Book } from "../models/book.model.js";
import { Review } from "../models/review.model.js";
import { User } from "../models/user.model.js";

const addBook = AsyncHandler(async (req, res) => {
  const { title, author, description, coverImage, genre, averageRating } =
    req.body;

  if (
    [title, author, description, coverImage, genre, averageRating].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  //   Create a new book
  try {
    const book = await Book.create({
      title,
      author,
      description,
      coverImage,
      genre,
      averageRating,
    });

    const createdBook = await Book.findById(book._id);

    if (!createdBook) {
      throw new ApiError(
        500,
        "Something went wrong while creating the new user"
      );
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdBook, "User Registered Successfully"));
  } catch (error) {
    console.log("User creation failed", error.message);
    throw new ApiError(
      500,
      error.message || "Something went wrong while registering the user."
    );
  }
});

const getBooks = AsyncHandler(async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.log("Unable to fetch books: ", error.message);
  }
});

const review = AsyncHandler(async (req, res) => {
  try {
    const { bookId, rating, comment, submittedVersion, refinedComment } =
      req.body;
      console.log("reached");
      
    const userId = req.body.userId;
    console.log(userId);
    

    // Validate Book exists
    const book = await Book.findById(bookId._id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Optional: Check if user already reviewed the book
    const existingReview = await Review.findOne({ book: bookId, user: userId });
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "You have already reviewed this book" });
    }

    // Create Review
    const review = await Review.create({
      book: bookId,
      user: userId,
      rating,
      comment,
      refinedComment,
      submittedVersion,
    });

    res.status(201).json({ message: "Review added successfully", review });
  } catch (error) {
    console.error("Error creating review:", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

export { addBook, getBooks, review };
