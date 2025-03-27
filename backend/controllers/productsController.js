const pool = require('../db/connection');

const getProducts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM minimarket');
        res.json(result.rows);
    } catch (error) {
        console.log('Error to find products:', error);
        res.status(500).json({ error: 'Server internal error' });
    }
};

module.exports = {
    getProducts
};
