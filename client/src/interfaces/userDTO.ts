export interface User {
  id: string;
  name: string;
  secondname: string;
  birthdate: string;
  email: string;
  password: string;
  cep: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface registerCredentials extends LoginCredentials {
  name: string;
  secondname: string;
  birthdate: string;
  cep: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface UserCreationAtr extends User {
   confirmPassword?: string;
}
