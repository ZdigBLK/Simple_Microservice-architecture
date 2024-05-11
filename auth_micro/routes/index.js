import { Router } from "express";
import authRouter from "./authRoutes.js"
import userRoutes from "./authRoutes.js"


const router = Router();

router.use("/api", authRouter)
router.use("/api", userRoutes)

export default router;