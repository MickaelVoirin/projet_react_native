import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
  res.send('KYC MODEL');
});

router.post('/add', (req, res) => {
  res.send('ADD');
});

router.get('/get', (req, res) => {
  res.send('GET');
});

router.post('/get_for_user', (req, res) => {
  res.send('GET FOR USER');
});

router.get('/question/get', (req, res) => {
  res.send('GET QUESTION');
});

export default router;

