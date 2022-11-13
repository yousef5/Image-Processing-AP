import express, { Response, Request } from "express";
import path from "path";
import { promises as fsPromises } from "fs";

const listImagesRouter = express.Router();

listImagesRouter.get("/", async (req: Request, res: Response): Promise<void> => {
    const ImageFolder = path.join(process.cwd(), "assets/fullsize");
    const allImageis = await fsPromises.readdir(ImageFolder);

    if (allImageis.length === 0) {
        res.status(200).send("the image folder is empty");
    } else {
        const reurnText = `<h1>All Images</h1> <ul>`;
        let imagesLI = "";
        allImageis.forEach((img: string): void => {
            imagesLI = imagesLI + `<li><p>${img}</p> <img width="500px" src="fullsize/${img}"></li>`;
        });

        res.status(200).send(`${reurnText} ${imagesLI}`);
    }
});

export default listImagesRouter;
