import supertest from "supertest";
import app from "../../..";
import { promises as fsPromises } from "fs";
import path from "path";

const request = supertest(app);

describe("image Route will Be done", (): void => {
    it("check if all query data right ==> response is 200", async (): Promise<void> => {
        const response = await request.get("/image?imagename=encenadaport&imagewidth=50&imageheight=70");
        expect(response.status).toBe(200);
    });

    it("check if some query data missing ==> status 400", async (): Promise<void> => {
        const response = await request.get("/image?imagename=encenadaport&imagewidth=50");
        expect(response.status).toBe(400);
    });

    it("check if image not found in full size folder ==> status 404", async (): Promise<void> => {
        const response = await request.get("/image?imagename=eaaaa&imagewidth=50&imageheight=70");
        expect(response.status).toBe(404);
    });

    it("check function that check image in path", async (): Promise<void> => {
        const checkImage = await fsPromises
            .stat(path.join(process.cwd(), "assets", "fullsize", `fjord.jpg`))
            .catch(() => {
                return null;
            });

        expect(checkImage).toBeTruthy();
    });
});
