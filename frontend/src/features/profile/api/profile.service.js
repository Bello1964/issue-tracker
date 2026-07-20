import axios from "@/lib/axios";

class ProfileService {
  async getProfile() {
    const { data } = await axios.get(
      "/users/profile"
    );

    return data;
  }
}

export default new ProfileService();