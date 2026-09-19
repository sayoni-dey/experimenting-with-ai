import "dotenv/config";
import express from "express";
import { supabaseAdmin } from "./config/database.js";

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(express.json());

app.get("/health", async (_req, res) => {
  const { error } = await supabaseAdmin
    .from("users", { schema: "auth" })
    .select("id")
    .limit(1);

  res.json({
    status: "ok",
    database: error ? "unreachable" : "connected",
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});