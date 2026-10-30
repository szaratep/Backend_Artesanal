import {Request, Response} from "express"
import mongoose from "mongoose";
import { CreateUserInput } from "../interface/user.interface.js"
import { encryptedPassword } from "../helpers/bcrypt.helper.js";
import { dbCreateUser } from "../services/user.service.js";

const createUser = async (req: Request<{}, {}, CreateUserInput>, res: Response): Promise<void> => {
    try {
        const inputData = req.body
        
        if(!inputData.password){
            throw new Error("Se olvidó pasar la contraseña");
        }

        const hashedPassword = await encryptedPassword(inputData.password);

        if(!hashedPassword){
            throw new Error("No se ha logrado procesar la contraseña");
        }

        inputData.password = hashedPassword;

        const data = await dbCreateUser(inputData);

        res.status(201).json({ data });

    } catch (error: unknown) {
        console.error(error);

        if(error instanceof mongoose.Error.ValidationError){
            const errorDetails: Record<string, string> = {};

            Object.entries(error.errors).forEach(([field , errObject]) => {
                errorDetails[field] = errObject.message;
            });

            res.status(400).json({
                msg: "Error de validacion en propiedades del usuario",
                errors: errorDetails,
            });

            return;
        }

        if (error instanceof mongoose.mongo.MongoServerError && error.code === 11000) {
            const duplicatedField = Object.keys(error.keyValue)[0];

            const errorMessages: Record<string, string> = {
                email: "El correo electronico ya se encuentra registrado",
                phone: "El telefono ya se encuentra registrado por otro usuario",
                documentNumber: "El docuemnto de identidad debe de ser unico, este ya se encuentra registrado"
            };

            res.status(400).json({
                msg: errorMessages[duplicatedField] ?? "Ya existe un registro con algunos valores unicos"
            });

            return;
        }

        if (error instanceof Error){
            if(error.message.includes("Se olvidó pasar la contraseña")){
                res.status(400).json({ msg: error.message });
                return;
            }

            if(error.message.includes("No se ha logrado procesar la contraseña")){
                res.status(400).json({ msg: error.message });
                return;
            }
        }

        res.status(500).json({ msg: "No se logro el registro de tu usuario" })

    }
}

export {
    createUser
}