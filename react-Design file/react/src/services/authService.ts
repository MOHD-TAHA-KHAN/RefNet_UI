import { api } from './api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  role?: 'fresher' | 'professional';
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role?: string;
  profilePicture?: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  async signup(userData: SignupData): Promise<AuthResponse> {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } catch {
      // ignore logout errors
    }
  },

  async getMe(): Promise<AuthUser> {
    const response = await api.get('/auth/me');
    return response.data;
  },
};
