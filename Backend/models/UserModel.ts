import { Schema, model, Document } from 'mongoose';

type UserDocument = Document & {
    name: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    country?: string;
    zipCode?: string;
    city?: string;
    state?: string;
    password: string;
    isAdmin: boolean;
};

const userSchema = new Schema<UserDocument>(
    {
        name: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        country: {
            type: String,
        },
        zipCode: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = model<UserDocument>('User', userSchema);

export default User;
