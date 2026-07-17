const mongoose = require("mongoose");
const { MongoMemoryReplSet } = require("mongodb-memory-server");
require("dotenv").config();

let replSet;

beforeAll(async () => {
  replSet = await MongoMemoryReplSet.create({
    replSet: {
      count: 1,
    },
  });

  await mongoose.connect(replSet.getUri(), {
    dbName: "issue_tracker_test",
  });
});

afterEach(async () => {
  const collections = mongoose.connection.collections;

  await Promise.all(
    Object.values(collections).map((collection) =>
      collection.deleteMany({})
    )
  );
});

afterAll(async () => {
  await mongoose.disconnect();

  if (replSet) {
    await replSet.stop();
  }
});