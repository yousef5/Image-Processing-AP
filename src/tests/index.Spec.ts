import supertest from "supertest";
import app from "..";

const request = supertest(app);

describe("check if main Page with / get 200", (): void => {
    it("main page get 200 as status code", async (): Promise<void> => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });
});
