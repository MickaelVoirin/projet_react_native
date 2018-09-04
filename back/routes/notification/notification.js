// IMPORT
import express from 'express';

// CONST
const router = express.Router();


// router.get('/', (req, res) => {
//   res.send('HELLLOOOO USER');
// });

router.post('/send', (req, res) => {
  if (req.body.receiver === 'gilles@gmail.com') {
    res.send('success');
  } else {
    res.status(403).send({ message: 'utilisateur inconnu' });
  }
});

router.get('/get_received', (req, res) => {
  res.send('RECOIS DES NOTIFS');
});

export default router;

