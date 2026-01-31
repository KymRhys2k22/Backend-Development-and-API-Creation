import express from "express";
import { Router } from "express";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const router = Router();

// @route GET api/users
// @desc Test route
// @access Public
router.get("/", (req, res) => res.send("User route"));

export default router;
