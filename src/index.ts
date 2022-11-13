import express, { Response, Request } from "express";
import path from "path";
import MainRoute from "./routes";
// create app
const app = express();
const port = 3000;

app.use(express.static(path.join(process.cwd(), "assets")));

// main http request to main page
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("welcome to image Api Proccing");
});

//main router
app.use(MainRoute);
// listening to app
app.listen(port, (): void => {
    console.log(`the server is running on Port : ${port}`);
});

export default app;
