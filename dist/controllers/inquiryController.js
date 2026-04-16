import prisma from '../config/db.js';
// @desc    Submit a new inquiry
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req, res) => {
    try {
        const { name, email, phone, message, type, productCategory, productName } = req.body;
        const inquiry = await prisma.inquiry.create({
            data: {
                name,
                email,
                phone,
                message,
                type,
                productCategory,
                productName,
            },
        });
        res.status(201).json(inquiry);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
export const getInquiries = async (req, res) => {
    try {
        const inquiries = await prisma.inquiry.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(inquiries);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
// @desc    Delete an inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private/Admin
export const deleteInquiry = async (req, res) => {
    try {
        const id = req.params.id;
        await prisma.inquiry.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Inquiry removed' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
//# sourceMappingURL=inquiryController.js.map