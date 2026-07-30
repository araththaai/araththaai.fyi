import { Router } from 'express';
import { prisma } from '../config/prisma';
import jwt from 'jsonwebtoken';
const router = Router();
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            res.status(400).json({ message: "User already exists with this email" });
            return;
        }
        // Previous code used custom encrypt. Let's use standard bcrypt for new but what if old uses crypto?
        // User requested preserving 100% logic. Let's copy crypto.ts later, but for now we'll import it.
        // We will copy `src/lib/crypto.ts` to `apps/server/src/utils/crypto.ts`
        const { encrypt } = await import('../utils/crypto');
        const hashedPassword = encrypt(password);
        let firstName = name;
        let lastName = "";
        if (name && name.includes(" ")) {
            const parts = name.split(" ");
            firstName = parts[0];
            lastName = parts.slice(1).join(" ");
        }
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstName,
                lastName,
                role: "CLIENT",
            },
        });
        res.status(201).json({ message: "User registered successfully", user: { id: user.id, email: user.email } });
    }
    catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if (!user || !user.password) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const { decrypt } = await import('../utils/crypto');
        const decryptedPassword = decrypt(user.password);
        const isPasswordValid = password === decryptedPassword;
        if (!isPasswordValid) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role, name: `${user.firstName || ""} ${user.lastName || ""}`.trim() }, process.env.NEXTAUTH_SECRET || "fallback_development_secret_do_not_use_in_prod", { expiresIn: '30d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });
        res.json({ token, user: { id: user.id, email: user.email, role: user.role, name: `${user.firstName || ""} ${user.lastName || ""}`.trim() } });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: "Logged out successfully" });
});
export const authRouter = router;
