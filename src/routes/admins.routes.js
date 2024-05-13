import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/admins', async (req, res) => {
  const admins = await prisma.administrador.findMany();
  res.json(admins);
  if (!admins) {
    res.status(404).json({ message: 'No admins found' });
  }
});

router.post('/admins', async (req, res) => {
  const { name, email, password } = req.body;
  const admin = await prisma.administrador.create({
    data: {
      name,
      email,
      password
    },
  });
  res.json(admin);
});

export default router;