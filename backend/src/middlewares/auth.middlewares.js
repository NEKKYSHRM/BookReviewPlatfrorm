import { ApiResponse } from "../utils/ApiResponse.js";

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token;

  const publicPaths = ["/signin", "/signup"];
  const path = req.path;

  const isPublicPath = publicPaths.includes(path);

  if (isPublicPath && token) {
    return res.redirect("/");
  }

  if (!isPublicPath && !token) {
    return res.redirect("/signin");
  }

    next
};
