import type { HydratedDocument } from "mongoose";
import type { CreateUserInput, IUser } from "../interface/user.interface.ts";
import UserModel from "../models/user.model.ts";

const dbCreateUser = async (newUser: CreateUserInput): Promise<HydratedDocument<IUser>> => {
    return await UserModel.create(newUser);
}


export {
    dbCreateUser
}