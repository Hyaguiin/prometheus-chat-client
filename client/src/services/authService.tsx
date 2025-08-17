import { api } from "@/api/axios";
import { AxiosError } from "axios";
import { handleApiError } from "@/utils/error";
import {
  UserCreationAtr,
  User,
  AuthResponse,
  registerCredentials,
  LoginCredentials,
} from "@/interfaces/userDTO";
export const AuthService = {
  async register(body: registerCredentials): Promise<AuthResponse> {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error(`Token inválido ou faltando`);
      }
      if (!token.startsWith("Bearer ")) {
        throw new Error(`Token inválido!`);
      }
      if (!body) {
        throw new Error(`Forneça o corpo`);
      }
      const register = await api.post<AuthResponse>(
        `/api/auth/register`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}: `,
          },
        }
      );
      return register.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      throw new Error(`Erro desconhecido!`);
    }
  },

  async login(body: LoginCredentials): Promise<AuthResponse> {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error(`Token  faltndo`);
      }
      if (!token.startsWith("Bearer ")) {
        throw new Error(`Token inválido!`);
      }
      if (!body) {
        throw new Error(`Forneça o corpo!`);
      }
      const login = await api.post<AuthResponse>(`/api/auth/login`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return login.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      throw new Error(`Erro desconhecido!`);
    }
  },
};
