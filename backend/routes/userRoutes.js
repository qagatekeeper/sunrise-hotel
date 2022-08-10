import express from "express";
const router = express.Router();

import { authUser, registerUser } from "../controllers/userConteroller.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/register").post(registerUser);

export default router;