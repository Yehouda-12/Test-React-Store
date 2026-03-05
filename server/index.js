import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', movieRoutes);

app.listen(PORT, () => {
    console.log(`server run in http://localhost:${PORT}/api/movies`)
})