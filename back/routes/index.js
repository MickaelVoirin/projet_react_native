// IMPORT
import express from 'express';
import userRouter from './user/user';


// CONST
const router = express.Router();


// ROUTER USE
router.use('/user', userRouter);


/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Coucou Happy Ledger'
  });
});

export default router;

