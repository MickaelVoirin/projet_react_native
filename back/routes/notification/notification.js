// IMPORT
import express from 'express';

// CONST
const router = express.Router();


// router.get('/', (req, res) => {
//   res.send('HELLLOOOO USER');
// });

router.post('/send', (req, res) => {
  res.send('SEND NOTIFICATION');
});

router.get('/get_received', (req, res) => {
  res.send('RECOIS DES NOTIFS');
});

export default router;

