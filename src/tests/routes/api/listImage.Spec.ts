import supertest from "supertest";
import app from "../../..";

const request = supertest(app);
describe("/images Get", (): void => {
    it("/images Get ==> response 200", async (): Promise<void> => {
        const response = await request.get("/images");
        expect(response.status).toBe(200);
    });
});
