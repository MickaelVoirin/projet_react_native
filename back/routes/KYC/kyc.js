// IMPORT
import express from 'express';
import fs from 'fs';
// CONST
const router = express.Router();


router.get('/', (req, res) => {
  res.json({'test': 'KYC MA GUEULE'});
});

router.post('/get_form', (req, res) => {
  const contenu = fs.readFileSync("./json_test/KYC/kyc_model_get_form.json", "UTF-8");
  res.json(contenu);
});

router.post('/set', (req, res) => {
  res.send('SET');
});

router.post('/authorisations/set', (req, res) => {
  res.send('AUTHORISATION / SET ');
});


export default router;

