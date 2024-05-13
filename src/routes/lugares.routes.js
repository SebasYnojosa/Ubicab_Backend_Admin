import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/lugares', async (req, res) => {
    const lugares = await prisma.lugar.findMany();
    res.json(lugares);
});

router.post('/lugares', async (req, res) => {
    await prisma.lugar.create({
        data: req.body 
    });
    res.json(req.body);
});

export default router;