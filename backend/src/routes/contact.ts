import { Router } from 'express';
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from '../controllers/contact';

const router = Router();

router.get('/', getContacts);
router.get('/:id', getContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
