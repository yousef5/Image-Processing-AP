import express from "express";
import listImagesRouter from "./api/listImage.router";
import imageRouter from "./api/image.router";
const MainRoute = express.Router();

MainRoute.use("/images", listImagesRouter);
MainRoute.use("/image", imageRouter);
export default MainRoute;
