class MongoRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data, options = {}) {
    return this.model.create([data], options).then(([doc]) => doc);
  }

  async findById(id, options = {}) {
    return this.model.findById(id, null, options);
  }

  async findOne(filter = {}, options = {}) {
    return this.model.findOne(filter, null, options);
  }

  async find(filter = {}, options = {}) {
    return this.model.find(filter, null, options);
  }

  async updateById(id, data, options = {}) {
    return this.model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
      ...options,
    });
  }

  async updateOne(filter, data, options = {}) {
    return this.model.findOneAndUpdate(filter, data, {
      new: true,
      runValidators: true,
      ...options,
    });
  }

  async deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  async count(filter = {}) {
    return this.model.countDocuments(filter);
  }

  async exists(filter = {}) {
    return this.model.exists(filter);
  }
}

module.exports = MongoRepository;