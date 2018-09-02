// IMPORT
import express from 'express';
import fs from 'fs';

// CONST
const router = express.Router();


// router.get('/', (req, res) => {
//   res.send('HELLLOOOO USER');
// });

router.post('/send', (req, res) => {
  res.send('SEND NOTIFICATION');
});

router.post('/get_received', (req, res) => {
  const content = fs.readFileSync('./json_test/notification/notification_get_received.json', "UTF-8");
  res.json(content);
});

export default router;

