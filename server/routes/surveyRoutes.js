import { Router } from "express";
import { submitSurvey } from "../controllers/surveyController.js";

const router = Router();

router.post("/", submitSurvey);

export default router;
