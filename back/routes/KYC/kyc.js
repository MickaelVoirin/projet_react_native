// IMPORT
import express from 'express';

// CONST
const router = express.Router();


router.get('/', (req, res) => {
  res.send('KYC MA GUEULE');
});

router.post('/get_form', (req, res) => {
  res.send('GET FORM');
});

router.post('/set', (req, res) => {
  res.send('SET');
});

router.post('/authorisations/set', (req, res) => {
  res.send('AUTHORISATION / SET ');
});


export default router;

