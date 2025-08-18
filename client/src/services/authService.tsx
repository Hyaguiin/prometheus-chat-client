import { api } from "@/api/axios";
import { AxiosError } from "axios";
import { handleApiError } from "@/utils/error";
import {
  AuthResponse,
  registerCredentials,
  LoginCredentials,
  User,
} from "@/interfaces/userDTO";

console.log(`Rota>  ${api}`);

export const AuthService = {
 async register(body: registerCredentials): Promise<User> {
  try {
    if (!body) {
      throw new Error("Forneça o corpo da requisição");
    }

    const response = await api.post<User>("api/auth/register", body);

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      handleApiError(err); 
    }
    if (err instanceof Error) throw err;
    throw new Error("Erro desconhecido!");
  }
},


  async login(body: LoginCredentials): Promise<AuthResponse> {
    try {
      if (!body) {
        throw new Error("Forneça o corpo da requisição");
      }

      const response = await api.post<AuthResponse>("api/auth/login", body);

      return response.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      if (err instanceof Error) throw err;
      throw new Error("Erro desconhecido!");
    }
  },
};
