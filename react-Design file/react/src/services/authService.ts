import { api } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  profile?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    profile?: string;
  };
  token: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  async signup(userData: SignupData): Promise<AuthResponse> {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },

  async refreshToken(): Promise<AuthResponse> {
    const response = await api.post('/auth/refresh');
    return response.data;
  }
};
