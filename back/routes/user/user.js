// IMPORT
import express from 'express';
import loginRouter from './login';
import registerRouter from './register';

// CONST
const router = express.Router();

// ROUTE USE
router.use('/login', loginRouter);
router.use('/register', registerRouter);

router.get('/', (req, res) => {
  res.send('HELLLOOOO USER');
});

export default router;

