import bcrypt from 'bcrypt';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';

// Password hash / compare
export const hashPassword = async (plainTextPassword: string) => {
    const saltRound = 12;
    const hash = await bcrypt.hash(plainTextPassword, saltRound);
    return hash;
};

export const comparePasswords = async (plainTextPassword: string, hashPassword: string) => {
    return await bcrypt.compare(plainTextPassword, hashPassword);
};

// User authorization Token
const secret = 'Jacks an Jill five';

export const signUserToken = async (user: User) => {
    let token = jwt.sign(
        { userId: user.userId },
        secret,
        { expiresIn: '1hr' }
    );

    return token;
};

export const verifyUser = async (req: Request) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            let decoded: any = await jwt.verify(token, secret);
            return User.findByPk(decoded.username);
        }
        catch (err) {
            return null;
        }
    }
    else {
        return null;
    }
};