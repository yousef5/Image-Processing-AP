import express, { Response, Request } from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import resizeImage from "../../helpers/imageResize";

const imageRouter = express.Router();

imageRouter.get("/", async (req: Request, res: Response): Promise<void> => {
    //*all query data
    const imagename = req?.query?.imagename;
    const imagewidth = req?.query?.imagewidth ? parseInt(req?.query?.imagewidth as string, 10) : null;
    const imageheight = req?.query?.imageheight ? parseInt(req?.query?.imageheight as string, 10) : null;

    //!check if query data is right
    if (!imagename || !imageheight || !imagewidth) {
        res.status(400).send("Your url must contain (imagename - imagewidth - imageheight) as query");
        return;
    }

    //* get thumb name
    const thumbImageName = `${imagename}-${imagewidth}-${imageheight}`;
    //*get path for fullImage and thumbImage
    const fullSizeImagePath = path.join(process.cwd(), "assets", "fullsize", `${imagename}.jpg`);

    const thumbImagePath = path.join(process.cwd(), "assets", "thumb", `${thumbImageName}.jpg`);

    //! check if full image or thumb image exit with fs->stat
    const checkFullImage = await fsPromises.stat(fullSizeImagePath).catch(() => {
        return null;
    });
    const checkThumbImage = await fsPromises.stat(thumbImagePath).catch(() => {
        return null;
    });

    if (!checkFullImage) {
        res.status(404).send("image not found in folder");
        return;
    }

    if (checkThumbImage) {
        fsPromises.readFile(thumbImagePath).then((imageData: Buffer) => {
            res.status(200).contentType("jpg").send(imageData);
        });
    } else {
        await resizeImage(fullSizeImagePath, thumbImagePath, imagewidth, imageheight);

        fsPromises.readFile(thumbImagePath).then((imageData: Buffer) => {
            res.status(200).contentType("jpg").send(imageData);
        });
    }
});

export default imageRouter;
