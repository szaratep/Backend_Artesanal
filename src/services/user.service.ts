import { HydratedDocument } from "mongoose";
import { CreateUserInput, IUser } from "../interface/user.interface.js";
import UserModel from "../models/user.model.js";

const dbCreateUser = async (newUser: CreateUserInput): Promise<HydratedDocument<IUser>> => {
    return await UserModel.create(newUser);
}