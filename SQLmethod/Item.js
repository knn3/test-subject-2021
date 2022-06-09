class ItemMethod {
    constructor(pool) {
        this.pool = pool;
    }

    //postAnItem
    postAnItem = async (req, res) => {
        try {
            const {
                tile,
                category,
                condition,
                statusItem,
                price,
                description,
                keyword,
                userItem,
            } = req.body;
            const newItem = await this.pool.query(
                "INSERT INTO products (title, category, condition, statusItem, price, description, keyword, userItem) VALUES ($1, $2, $3, $4, $5, $6, $7 $8) RETURNING*",
                [
                    title,
                    catefory,
                    condition,
                    statusItem,
                    price,
                    description,
                    keyword,
                    userItem,
                ]
            );
            res.json(newItem.rows);
        } catch (err) {
            console.log(err.message);
        }
    };

    //get all items
    getAllItem = async (req, res) => {
        try {
            const products = await this.pool.query("SELECT * FROM products");
            res.json(products.rows);
        } catch (err) {
            console.log(err.message);
        }
    };
}

module.exports = ItemMethod;
