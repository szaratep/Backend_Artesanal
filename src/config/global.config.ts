export const ROLES = {
    ADMIN: "administrator",
    CONTRIBUTOR: "contributor",
    SUBSCRIBER: "subscriber",
} as const;

export const DOC_TYPE = {
    CC: "C.C.",
    CE: "C.E.",
    NIT: "N.I.T.",
    PP: "P.P.",
} as const;

// Tipos derivados de los valores
export type Role = typeof ROLES[keyof typeof ROLES];
export type DocType = typeof DOC_TYPE[keyof typeof DOC_TYPE];

export const ALLOWED_ROLES = Object.values(ROLES);
export const ALLOWED_DOCUMENTS = Object.values(DOC_TYPE);