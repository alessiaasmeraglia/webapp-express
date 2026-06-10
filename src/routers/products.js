import { index, show, create, destroy, modify } from '../controllers/products.js';
import express from 'express';

const router = express.Router();

// INDEX hhtp://localhost:3000/products
router.get('/', index)

// SHOW hhtp://localhost:5555/products/:id
router.get('/:id', show);

// CREATE
router.post('/', create)

// PATCH
router.patch('/:id', modify)

// DELETE
router.delete('/:id', destroy)

export default router;