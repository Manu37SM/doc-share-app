import { Router } from "express";
import prisma from "../prisma.js";
import multer from "multer";
import fs from "fs";

const router = Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/", async (req, res) => {
  try {
    const { title, ownerId } = req.body;

    const document = await prisma.document.create({
      data: {
        title,
        ownerId,
      },
    });

    res.json(document);
  } catch (error) {
    res.status(500).json({
      error: "Failed to create document",
    });
  }
});

router.get("/", async (_req, res) => {
  const docs = await prisma.document.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });

  res.json(docs);
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const doc = await prisma.document.findUnique({
    where: {
      id,
    },
  });

  if (!doc) {
    return res.status(404).json({
      error: "Document not found",
    });
  }

  res.json(doc);
});

router.patch("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { title, content } = req.body;

    const updated = await prisma.document.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({
      error: "Update failed",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.document.delete({
      where: {
        id,
      },
    });

    res.json({
      message: "Deleted",
    });
  } catch (error) {
    res.status(500).json({
      error: "Delete failed",
    });
  }
});

router.post("/:id/share", async (req, res) => {
  try {
    const documentId = Number(req.params.id);

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

    const share = await prisma.sharedDocument.create({
      data: {
        documentId,
        userId: user.id,
      },
    });

    res.json(share);
  } catch (error) {
    res.status(500).json({
      error: "Share failed",
    });
  }
});

router.get("/shared/:userId", async (req, res) => {
  const userId = Number(req.params.userId);

  const docs = await prisma.sharedDocument.findMany({
    where: {
      userId,
    },
    include: {
      document: true,
    },
  });

  res.json(docs);
});

router.post(
  "/import",
  upload.single("file"),
  async (req, res) => {
    try {
      const ownerId = Number(req.body.ownerId);

      const content = fs.readFileSync(
        req.file!.path,
        "utf-8"
      );

      const document =
        await prisma.document.create({
          data: {
            title: req.file!.originalname,
            content,
            ownerId,
          },
        });

      res.json(document);
    } catch (error) {
      res.status(500).json({
        error: "Import failed",
      });
    }
  }
);

export default router;