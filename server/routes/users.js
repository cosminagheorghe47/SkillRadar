import express from "express";
import { initiateClickup } from "../controllers/users.js";

const router = express.Router();

/* CREATE */
router.get("/initiateClickup", initiateClickup);
//router.post("/editUser",editUser);

export default router;