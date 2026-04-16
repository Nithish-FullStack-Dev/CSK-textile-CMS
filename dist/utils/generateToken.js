import jwt from "jsonwebtoken";
const generateToken = (id, role) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined");
    }
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
export default generateToken;
//# sourceMappingURL=generateToken.js.map