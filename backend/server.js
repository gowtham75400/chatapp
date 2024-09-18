import dotenv from "dotenv";
dotenv.config(); // This should be at the top

import express from "express";
import authroute from "./routes/authroute.js";
import connectedtodb from "./db/connectedtodb.js";
import cookieParser from "cookie-parser";
import messages from "./routes/messages.js";
import userRoutes from "./routes/userRoute.js"

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(express.json()); // to parse the incoming requests with payloads (from req.body)

app.get("/", (req, res) => {
  res.send("Home Page");
});


app.use("/api/auth", authroute);
app.use("/api/messages", messages);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
  connectedtodb();
  console.log(`Server running on port ${PORT}`);
});
