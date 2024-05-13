import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/eventos', async (req, res) => {
    const eventos = await prisma.evento.findMany();
    res.json(eventos);
});

router.post('/eventos', async (req, res) => {
    await prisma.evento.create({
        data: {
            name: req.body.name,
            description: req.body.description,
            date_inicio: new Date(req.body.date_inicio),
            date_fin: new Date(req.body.date_fin),
            administrador_id: req.body.administrador_id,
            lugar_id: req.body.lugar_id
        }
    });
    res.json(req.body);
});

export default router;