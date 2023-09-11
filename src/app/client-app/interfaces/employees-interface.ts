export interface EmployedResponse {
  birthdate: string;
  created_at?: string;
  email: string;
  id: number;
  name: string;
  phone: string;
  proceedings: number;
  rfc: string;
  updated_at?: string;
}


export interface DeleteEmployed {
  message: string;
}

export interface EmployedCreate {
  birthdate: string;
  email: string;
  name: string;
  phone: string;
  proceedings: number;
  rfc: string;
  id?: number;
}
