// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next) =>{
//     const {token} = req.headers;
//     if(!token){
//         return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     try {
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
// export default authMiddleware;
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        const token = authHeader.split(" ")[1]; // Lấy token sau "Bearer "
        console.log("Received Token:", token); // Kiểm tra token nhận được

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded); // Kiểm tra payload token

        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({ success: false, message: "Invalid or Expired Token" });
    }
};

export default authMiddleware;
