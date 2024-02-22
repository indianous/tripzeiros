export interface CreateAdministratorDTO {
  lastname: string;
  username: string;
  name: string;
  email: string;
  password: string;
  avatar?: { url: string; alt: string };
  avatarId?: string;
}
