import { Router } from "express";
import { registerUser, loginUser, refreshAccessToken, userData, logout } from "../controllers/user.controller.js";
import { getUserData } from "../helpers/getUserData.js";

const router = Router()

router.route("/registerUser").post(registerUser)
router.route("/loginUser").post(loginUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/userData").get(getUserData, userData)
router.route("/logout").get(getUserData, logout)

export default router