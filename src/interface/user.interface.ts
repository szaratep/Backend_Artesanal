import { Role, DocType } from "../config/global.config.js";

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: Role;
    phone: string;
    documentType: DocType;
    documentNumber: string;
    isActive: boolean;
}

// role, documentType e isActive tienen default en el schema
export type CreateUserInput = Omit<IUser, "role" | "documentType" | "isActive"> &
    Partial<Pick<IUser, "role" | "documentType" | "isActive">>;