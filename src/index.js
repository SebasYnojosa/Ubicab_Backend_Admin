import express from 'express';

import adminsRoutes from './routes/admins.routes.js';
import eventosRoutes from './routes/eventos.routes.js';
import lugaresRoutes from './routes/lugares.routes.js';

const app = express();

app.use(express.json());

app.use('/api', adminsRoutes);
app.use('/api', eventosRoutes);
app.use('/api', lugaresRoutes);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running');
});

export default app;