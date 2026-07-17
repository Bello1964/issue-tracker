const MongoRepository = require("./MongoRepository");
const User = require("../models/User");

class UserRepository extends MongoRepository {
  constructor() {
    super(User);
  }

  async createUser(data) {
    return this.create(data);
  }

  async findUserByEmail(email) {
    return this.model
      .findOne({
        email,
        isDeleted: false,
      })
      .select("+password");
  }

  async findUserById(id) {
    return this.findOne({
      _id: id,
      isDeleted: false,
    });
  }

  async emailExists(email) {
    return this.exists({
      email,
      isDeleted: false,
    });
  }

  async updateUser(id, data) {
    return this.updateById(id, data);
  }
}

module.exports = new UserRepository();