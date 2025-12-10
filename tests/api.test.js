const request = require("supertest");
const { app, server } = require("../src/server");


it("GET / → returns message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("This is my portfolio");
});

afterAll(() => {
  server.close();
});
