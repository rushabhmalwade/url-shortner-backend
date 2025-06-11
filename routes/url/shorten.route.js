import express from "express";
import urlShortner from "../../controllers/url/shorten.controller";

const router = express.Router();

router.post("/shorten", urlShortner);
export default router;
