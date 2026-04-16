import express from 'express';
import { getJobs, getJobsAdmin, getJobById, createJob, updateJob, deleteJob, applyToJob, getApplications, getAllApplications } from '../controllers/jobController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';
const router = express.Router();
router.get('/admin', protect, admin, getJobsAdmin);
router.get('/applications', protect, admin, getAllApplications);
router.route('/')
    .get(getJobs)
    .post(protect, admin, createJob);
router.post('/apply', applyToJob);
router.route('/:id')
    .get(getJobById)
    .put(protect, admin, updateJob)
    .delete(protect, admin, deleteJob);
router.get('/:id/applications', protect, admin, getApplications);
export default router;
//# sourceMappingURL=jobRoutes.js.map