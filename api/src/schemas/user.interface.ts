import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Users {
    email: string,
    username: string,
    password: string,
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<Users>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// 3. Create a Model.
export const User = model<Users>('User', userSchema);