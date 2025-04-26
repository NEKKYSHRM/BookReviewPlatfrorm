import jwt from "jsonwebtoken";

export const getUserData = (req, res, next) => {
  try {
    // console.log(req.cookies);
    
    const token = req.cookies?.accessToken;
    // console.log(token);
    
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token" });
    }
    
    // Verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log("decoded", decoded);
    
    req.user = {id: decoded._id};
    // console.log("req.user: ", req.user);
    
    next(); 
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
