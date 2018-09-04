import express from 'express';
import fs from 'fs';

const router = express.Router();

// Vérification du login de l'utilisateur

router.post('/login', (req, res) => {
  const loginData = JSON.parse(fs.readFileSync('./json_files/requetes/user/user_login.json', 'UTF-8'));
  let login = false;
  for (let i = 0; i < loginData.length; i++) {
    if (loginData[i].email === req.body.email && loginData[i].password === req.body.password) {
      if (loginData[i].email === 'gilles@gmail.com') {
        const successLogin = fs.readFileSync('./json_test/user/user_login_a.json', 'UTF-8');
        res.send(successLogin);
        login = true;
      }
      if (loginData[i].email === 'bob@gmail.com') {
        const successLogin = fs.readFileSync('./json_test/user/user_login_b.json', 'UTF-8');
        console.log(successLogin);
        res.send(successLogin);
        login = true;
      }
    }
  }
  if (!login) {
    res.status(401).send({ message: 'login failed' });
  }
  
});

router.post('/register', (req, res) => {
  res.send('ENREGISTRE TOI');
});

export default router;

