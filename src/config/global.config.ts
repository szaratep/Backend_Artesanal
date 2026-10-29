export const ROLES = {
    ADMIN: "administrator",
    CONTRIBUTOR: "contributor",
    SUBSCRIBER: "subscriber",
} as const;

export const DOC_TYPE = {
    CC: "Cedula de ciudadania",
    CE: "Cedula de extranjeria",
    NIT: "Numero de identificacion tributaria",
    PP: "Pasaporte",
} as const;

// Tipos derivados de los valores
export type Role = typeof ROLES[keyof typeof ROLES];
export type DocType = typeof DOC_TYPE[keyof typeof DOC_TYPE];

export const ALLOWED_ROLES = Object.values(ROLES);
export const ALLOWED_DOCUMENTS = Object.values(DOC_TYPE);