export interface User {
  id: string;
  name: string;
  secondname: string;
  birthdate: Date;
  email: string;
  password: string;
  cep: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface registerCredentials extends LoginCredentials {
  name: string;
  secondname: string;
  birthdate: Date;
  cep: number;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface UserCreationAtr extends User {
   confirmPassword?: string;
}
