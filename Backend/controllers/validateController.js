// Controller for handling validation requests
const validateController = {
    validate: async (req, res) => {
        try {
            res.json({ message: 'Validation endpoint working' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = validateController; 