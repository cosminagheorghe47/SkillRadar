import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

/* CREATE */
router.post("/initiateClickup", initiateClickup);
//router.post("/editUser",editUser);

export default router;