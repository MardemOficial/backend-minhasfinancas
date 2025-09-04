import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import middlewareException from "./middleware/middlewareException.js";

const app = express();
app.use(cors());

routes(app);

app.use(middlewareException);

export default app;