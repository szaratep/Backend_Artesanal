import {Schema, model} from "mongoose"
import { ALLOWED_DOCUMENTS, ALLOWED_ROLES, DOC_TYPE, ROLES } from "../config/global.config.js"
import { IUser } from "../interface/user.interface.js";

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        match: [/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras y espacios'],
        minlength: [2, 'El nombre debe tener al menos 2 caracteres'],
        maxlength: [50, 'El nombre no puede exceder los 50 caracteres']
    },

    email: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true,
        lowercase: true ,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Por favor, ingresa un correo electrónico válido']
    },

    password:{
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ALLOWED_ROLES,
        default: ROLES.SUBSCRIBER
    },

    phone: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/^[+0-9\s-]+$/, 'El teléfono solo puede contener números, espacios y guiones']
    },

    documentType: {
        type: String,
        enum: ALLOWED_DOCUMENTS,
        default: DOC_TYPE.CC
    },

    documentNumber: {
        type: String,
        unique: true,
        required: true,
        minlength: [1, "Tu documento minimo puede tener un digito"],
        maxlength: [10, "Tu docuemnto maximo puede tener 10 digitos"]
    },

    isActive: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true
});

const UserModel = model<IUser>('user', UserSchema);

export default UserModel;