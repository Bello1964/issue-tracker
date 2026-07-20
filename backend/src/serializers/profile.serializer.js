class ProfileSerializer {
  serialize(user, statistics) {
    return {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },

      statistics: {
        created: statistics.created,
        assigned: statistics.assigned,
        resolved: statistics.resolved,
        open: statistics.open,
      },
    };
  }
}

module.exports = new ProfileSerializer();