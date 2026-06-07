import { Router } from "express";
import prisma from "../prisma.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: "Login failed",
    });
  }
});

router.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

export default router;