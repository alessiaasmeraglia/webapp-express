import connection from "../db/connections/connection.js";

async function index(request, response) {
    try {
        const sql = `
      SELECT 
        products.id,
        products.name,
        products.price,
        products.description,
        products.available,
        products.in_stock,
        products.ingredient,
        products.image,
        products.created_at,
        products.updated_at,
        GROUP_CONCAT(categories.name SEPARATOR ', ') AS categories
      FROM products
      LEFT JOIN category_product
        ON products.id = category_product.product_id
      LEFT JOIN categories
        ON category_product.category_id = categories.id
      GROUP BY products.id
      ORDER BY products.id
    `;

        const [products] = await connection.query(sql);

        response.json({
            data: products,
        });
    } catch (error) {
        console.error(error);

        response.status(500).json({
            error: "Internal Server Error",
            message: "Errore durante il recupero dei prodotti",
        });
    }
}

export { index };