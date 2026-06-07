import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import documentRoutes from "./routes/documents.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Backend Running",
  });
});

app.use("/auth", authRoutes);
app.use("/documents", documentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});