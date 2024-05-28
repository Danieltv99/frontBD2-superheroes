import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private user: { email: string } | null = null;

  login(email: string, password: string): boolean {
    // Aquí deberías agregar la lógica para autenticar con el backend
    // Por simplicidad, estamos asumiendo que cualquier usuario con una contraseña
    // que no esté vacía es autenticado exitosamente.
    if (password) {
      this.isAuthenticated = true;
      this.user = { email: email };
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.user = null;
  }

  getUser(): { email: string } | null {
    return this.user;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
