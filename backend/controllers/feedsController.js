import { Router } from "express";
import { getAllFeeds, getParticularFeed } from "../services/feedsServices.js";

const router = Router();

router.get("/", getAllFeeds);
router.get("/:postId", getParticularFeed);

export default router;