import type { Request, Response } from "express";
import prisma from "../config/db.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id.toString(),
                email: user.email,
                role: user.role,
                token: generateToken(user.id.toString(), user.role),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};