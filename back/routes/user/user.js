import express from 'express';
import fs from 'fs';

const router = express.Router();

// Vérification du login de l'utilisateur

router.post('/login', (req, res) => {
  const loginData = JSON.parse(fs.readFileSync('./json_files/requetes/user/user_login.json', 'UTF-8'));
  if (loginData.email !== req.body.email || loginData.password !== req.body.password) {
    res.status(401).send({ message: 'login failed' });
  } else {
    const successLogin = fs.readFileSync('./json_test/user/user_login_a.json', 'UTF-8');
    res.send(successLogin);
  }
});

router.post('/register', (req, res) => {
  res.send('ENREGISTRE TOI');
});

export default router;

