const request = require("supertest");
const app = require("../src/server");

it("GET / → returns message", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("This is my portfolio!");
});
