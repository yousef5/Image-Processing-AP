import path from "path";
import resizeImage from "../../helpers/imageResize";
import { promises as fsPromises } from "fs";
import sizeOf from "image-size";

const imageName = "fjord";
const imageWidth = 300;
const imageHiegth = 400;
const fullSizeImgPath = path.join(process.cwd(), "assets", "fullsize", `${imageName}.jpg`);
const imgThumbPath = path.join(process.cwd(), "assets", "thumb", `${imageName}-${imageWidth}-${imageHiegth}.jpg`);
describe("image Resize function", (): void => {
    it("check img after resizing it in thumb Folder", async (): Promise<void> => {
        await resizeImage(fullSizeImgPath, imgThumbPath, imageWidth, imageHiegth);
        const checkThumbImage = await fsPromises.stat(imgThumbPath).catch(() => {
            return null;
        });
        expect(checkThumbImage).toBeTruthy();
    });

    it("check the width and height of image after resize", async (): Promise<void> => {
        await resizeImage(fullSizeImgPath, imgThumbPath, imageWidth, imageHiegth);
        sizeOf(imgThumbPath, (err, dim) => {
            expect(dim?.width).toBe(imageWidth);
            expect(dim?.height).toBe(imageHiegth);
        });
    });
});
