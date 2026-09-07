import { Router } from "express";
import {
  listProjects,
  getProject,
  getHomepageStats,
  getNavConfig,
} from "../controllers/contentController.js";

const router = Router();

router.get("/projects", listProjects);
router.get("/projects/:slug", getProject);
router.get("/stats", getHomepageStats);
router.get("/navigation", getNavConfig);

export default router;
