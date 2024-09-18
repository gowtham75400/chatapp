import express from "express";
import sendMessages, { getMessage }  from "../controllers/messages.js";
import protectRoute from "../middleware/protectRoute.js"


const router = express.Router()

router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute ,sendMessages)

export default router