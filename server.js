import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
  console.info("Server is running on port", process.env.SERVER_PORT);
});