import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import * as trpcExpress from '@trpc/server/adapters/express';
import dotenv from 'dotenv';
import path from 'path';
// Load env variables
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
import { appRouter } from './routers/_app';
import { createContext } from './trpc';
import { authRouter } from './routes/auth';
import { bookingRouter } from './routes/booking';
const app = express();
const port = process.env.PORT || 3000;
// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.VITE_APP_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
// REST Routes
app.use('/api/auth', authRouter);
app.use('/api/booking', bookingRouter);
// TRPC Middleware
app.use('/api/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
}));
// Fallback Route
app.get('/', (req, res) => {
    res.send('Server is running');
});
// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
