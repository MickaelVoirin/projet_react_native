// IMPORT
import express from 'express';

// CONST
const router = express.Router();


router.get('/', (req, res) => {
  res.send('LOGIN TOI');
});

export default router;
