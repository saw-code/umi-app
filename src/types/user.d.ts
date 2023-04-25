export interface User {
  id?: number;
  name?: string;
  company?: string;
  role?: {
    id: number;
    title: string;
  };
  isLoggedIn: boolean;
}

// Пользовательский интерфейс определяет, как мы будем получать
// информацию о пользователе из серверной части
