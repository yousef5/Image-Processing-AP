import sharp from "sharp";

const resizeImage = async (
    fullImagePath: string,
    thumbImagePath: string,
    imageWidth: number,
    imageheight: number,
): Promise<void> => {
    try {
        await sharp(fullImagePath).resize(imageWidth, imageheight).toFile(thumbImagePath);
    } catch (error) {
        throw new Error("some bugs when resize image");
    }
};

export default resizeImage;
