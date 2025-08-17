import { api } from "@/api/axios";
import { UserCreationAtr, User } from "@/interfaces/userDTO";
import { AxiosError } from "axios";
import { handleApiError } from "@/utils/error";

export const UserService = {
  async createUser(body: UserCreationAtr): Promise<User> {
    try {
      const user = await api.post<User>("/api/user", body);
      console.log(`Usuário criado: ${JSON.stringify(user)}`);
      return user.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      throw new Error(`Erro desconhecido!`);
    }
  },

  async getUser(): Promise<User[]> {
    try {
      const user = await api.get<User[]>("/api/user");
      console.log(`Todos os Usuários: ${JSON.stringify(user)}`);
      return user.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      return [];
    }
  },

  async getUserById(id: number): Promise<User> {
    try {
      const user = await api.get<User>(`/api/user/:${id}`);
      console.log(`Usuário encontrado: ${JSON.stringify(user)}`);
      return user.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      throw new Error(`Erro desconhecido!`);
    }
  },

  async updateUser(id: number, body: Partial<UserCreationAtr>): Promise<User> {
    try {
      const user = await api.put<User>(`/api/user/: ${id}`, body);
      console.log(`Usuário Atualizado: ${JSON.stringify(user)}`);
      return user.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
      throw new Error(`Erro desconhecido!`);
    }
  },

  async deleteUserById(id: number): Promise<void> {
    try {
        const user = await api.delete<void>(`/api/user/:${id}`)
    } catch (err) {
      if (err instanceof AxiosError) {
        handleApiError(err);
      }
       return undefined;
    }
  },
};
