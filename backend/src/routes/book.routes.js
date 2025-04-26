import { Router } from "express";
import { addBook, getBooks, review } from "../controllers/book.controller.js";

const router = Router();

router.route("/addBook").post(addBook)
router.route("/getBooks").get(getBooks)
router.route("/review").post(review)

export default router