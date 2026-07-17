const request = require("supertest");
const app = require("../src/app");

describe("Authentication", () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: `john${Date.now()}@example.com`,
    password: "Password123",
  };

  describe("POST /api/auth/register", () => {
    it("should register a new user", async () => {
      const res = await request(app)
        .post("/api/auth/register")
        .send(user);

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user).toBeDefined();

      expect(res.headers["set-cookie"]).toBeDefined();
      expect(res.headers["set-cookie"][0]).toContain("token=");
    });

    it("should not allow duplicate email registration", async () => {
      await request(app)
        .post("/api/auth/register")
        .send(user);

      const res = await request(app)
        .post("/api/auth/register")
        .send(user);

      expect(res.statusCode).toBe(409);
      expect(res.body.success).toBe(false);
    });
  });

  describe("POST /api/auth/login", () => {
    beforeEach(async () => {
      await request(app)
        .post("/api/auth/register")
        .send(user);
    });

    it("should login successfully", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: user.email,
          password: user.password,
        });

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);

      expect(res.body.data.user).toBeDefined();
      expect(res.body.data.token).toBeUndefined();

      expect(res.headers["set-cookie"]).toBeDefined();
      expect(res.headers["set-cookie"][0]).toContain("token=");
    });

    it("should reject invalid password", async () => {
      const res = await request(app)
        .post("/api/auth/login")
        .send({
          email: user.email,
          password: "WrongPassword123",
        });

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe("GET /api/auth/me", () => {
    let cookie;

    beforeEach(async () => {
      await request(app)
        .post("/api/auth/register")
        .send(user);

      const login = await request(app)
        .post("/api/auth/login")
        .send({
          email: user.email,
          password: user.password,
        });

      cookie = login.headers["set-cookie"];
    });

    it("should return authenticated user", async () => {
      const res = await request(app)
        .get("/api/auth/me")
        .set("Cookie", cookie);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.user).toBeDefined();
      expect(res.body.data.user.email).toBe(user.email);
    });

    it("should reject unauthenticated requests", async () => {
      const res = await request(app)
        .get("/api/auth/me");

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe("POST /api/auth/logout", () => {
    let cookie;

    beforeEach(async () => {
      await request(app)
        .post("/api/auth/register")
        .send(user);

      const login = await request(app)
        .post("/api/auth/login")
        .send({
          email: user.email,
          password: user.password,
        });

      cookie = login.headers["set-cookie"];
    });

    it("should logout successfully", async () => {
      const res = await request(app)
        .post("/api/auth/logout")
        .set("Cookie", cookie);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it("should not access protected route after logout", async () => {
      const logout = await request(app)
        .post("/api/auth/logout")
        .set("Cookie", cookie);

      const clearedCookie = logout.headers["set-cookie"];

      const res = await request(app)
        .get("/api/auth/me")
        .set("Cookie", clearedCookie);

      expect(res.statusCode).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});