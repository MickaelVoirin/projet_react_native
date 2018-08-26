import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  res.send('LOGIN TOI');
});

router.post('/register', (req, res) => {
  res.send('ENREGISTRE TOI');
});

export default router;

