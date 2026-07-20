import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: "Token Missing" });
        }

        const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader;

        const verify = jwt.verify(token, "notesmanagement");

        req.user = verify;

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};

export default authMiddleware;