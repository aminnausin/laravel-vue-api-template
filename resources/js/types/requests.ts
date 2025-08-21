export interface ChangePasswordRequest {
    current_password: string;
    password: string;
    password_confirmation: string;
}

export interface ChangeEmailRequest {
    email: string;
    password: string;
}

export interface PasswordRequest {
    password: string;
}
