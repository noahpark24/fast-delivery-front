import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiURL: string = process.env.API_URL || "http://localhost:3001/api";


class PackagesService {
  async getAllPackages() {
    try {
      const response = await axios.get(`${apiURL}/packages/all`, {
        withCredentials: true,
      });
      return response.data.message;
    } catch (error) {
      console.error("Error al obtener los paquetes:", error);
      throw error;
    }
  }
}

export default new PackagesService();
