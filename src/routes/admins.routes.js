import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/admins', async (req, res) => {
  const admins = await prisma.admin.findMany();
  res.json(admins);
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