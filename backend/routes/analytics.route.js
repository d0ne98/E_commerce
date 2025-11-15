import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";
import { getAnalyticsData } from "../controller/analytics.controller";

const router = express.Router();

router.get("/", protectRoute, adminRoute, async (req, res) => {
  try {
    const analyticsData = await getAnalyticsData();
  } catch (error) {}
});
export default router;
