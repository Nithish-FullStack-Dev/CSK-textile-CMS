import bcrypt from "bcryptjs";
// import prisma from "../lib/prisma.js";
import generateToken from "../utils/generateToken.js";
import prisma from "@/config/db.js";
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }
        return res.json({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(String(user.id), user.role),
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Server error",
        });
    }
};
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const userExists = await prisma.user.findUnique({
            where: { email },
        });
        if (userExists) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: role || "admin",
            },
        });
        return res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(String(user.id), user.role),
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Server error",
        });
    }
};
//# sourceMappingURL=authController.js.map