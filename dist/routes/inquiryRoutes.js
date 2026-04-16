import express from 'express';
import { createInquiry, getInquiries, deleteInquiry } from '../controllers/inquiryController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';
const router = express.Router();
router.route('/')
    .post(createInquiry)
    .get(protect, admin, getInquiries);
router.route('/:id')
    .delete(protect, admin, deleteInquiry);
export default router;
//# sourceMappingURL=inquiryRoutes.js.map