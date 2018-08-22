// IMPORT
import express from 'express';

// CONST
const router = express.Router();


router.get('/', (req, res) => {
  res.send('ENREGISTRE TOI');
});

export default router;
