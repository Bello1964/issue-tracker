const mongoose = require("mongoose");

class DatabaseHelper {
  async withTransaction(callback) {
    const session = await mongoose.startSession();

    try {
      session.startTransaction();

      const result = await callback(session);

      await session.commitTransaction();

      return result;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    } finally {
      await session.endSession();
    }
  }
}

module.exports = new DatabaseHelper();