class PaginationHelper {
  build(query = {}) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    return {
      page,
      limit,
      skip: (page - 1) * limit,
    };
  }

  metadata({ page, limit, totalItems }) {
    const totalPages = Math.ceil(totalItems / limit) || 1;

    return {
      page,
      limit,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    };
  }
}

module.exports = new PaginationHelper();