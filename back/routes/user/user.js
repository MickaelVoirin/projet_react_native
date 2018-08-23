// IMPORT
import express from 'express';

// CONST
const router = express.Router();

router.post('/', (req, res) => {
  res.send('HELLLOOOO USER');
});

router.post('/login', (req, res) => {
  res.send('LOGIN TOI');
});

router.post('/register', (req, res) => {
  res.send('ENREGISTRE TOI');
});

export default router;

