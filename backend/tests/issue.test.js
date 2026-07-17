const request = require("supertest");
const app = require("../src/app");

describe("Issue Endpoints", () => {
  let cookie;

  const user = {
    firstName: "John",
    lastName: "Doe",
    email: `john${Date.now()}@example.com`,
    password: "Password123",
  };

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

  it("should create an issue", async () => {
    const res = await request(app)
      .post("/api/issues")
      .set("Cookie", cookie)
      .send({
        title: "Login Bug",
        description: "Unable to login with valid credentials",
        priority: "high",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.issue).toBeDefined();
    expect(res.body.data.issue.title).toBe("Login Bug");
  });

  it("should retrieve all issues", async () => {
    const res = await request(app)
      .get("/api/issues")
      .set("Cookie", cookie);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data.issues)).toBe(true);
  });

  it("should retrieve a single issue", async () => {
    const created = await request(app)
      .post("/api/issues")
      .set("Cookie", cookie)
      .send({
        title: "Single Issue",
        description: "Testing get by id",
        priority: "medium",
      });

    const id = created.body.data.issue.id;

    const res = await request(app)
      .get(`/api/issues/${id}`)
      .set("Cookie", cookie);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.issue.id).toBe(id);
  });

  it("should update an issue", async () => {
    const created = await request(app)
      .post("/api/issues")
      .set("Cookie", cookie)
      .send({
        title: "Update Test",
        description: "Before update",
        priority: "low",
      });

    const id = created.body.data.issue.id;

    const updated = await request(app)
      .patch(`/api/issues/${id}`)
      .set("Cookie", cookie)
      .send({
        status: "in_progress",
      });

    expect(updated.statusCode).toBe(200);
    expect(updated.body.success).toBe(true);
    expect(updated.body.data.issue.status).toBe("in_progress");
  });

  it("should delete an issue", async () => {
    const created = await request(app)
      .post("/api/issues")
      .set("Cookie", cookie)
      .send({
        title: "Delete Test",
        description: "Delete this issue",
        priority: "high",
      });

    const id = created.body.data.issue.id;

    const deleted = await request(app)
      .delete(`/api/issues/${id}`)
      .set("Cookie", cookie);

    expect(deleted.statusCode).toBe(200);
    expect(deleted.body.success).toBe(true);
  });

  it("should reject unauthenticated requests", async () => {
    const res = await request(app)
      .get("/api/issues");

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });
});