// src/store/types.ts
export interface StateInterface {
  auth: {
    isAuthenticated: boolean;
    user: {
      role: string;
    };
  };
  // Ajoutez d'autres propriétés de l'état global ici si nécessaire
}
