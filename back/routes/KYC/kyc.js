import express from 'express';
import fs from 'fs';

const router = express.Router();

router.post('/form/:id', (req, res) => {
  const contenu = fs.readFileSync(`./json_test/KYC/kyc_model_get_form_${req.params.id}.json`, "UTF-8");
  res.json(contenu);
});

router.post('/set', (req, res) => {
  res.send('SET');
});

router.post('/authorisations/set', (req, res) => {
  res.send('AUTHORISATION / SET ');
});


export default router;

