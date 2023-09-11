import { UserResponse } from "./user-interface";

export interface AuthResponse {
  message: string;
  access_token: string;
  token_type: string;
  user: UserResponse;
}
