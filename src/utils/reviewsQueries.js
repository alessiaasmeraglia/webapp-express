import connection from "../db/connections/connection.js";

//  Count delle recensioni per ogni prodotto
export async function countReviews(productId) {
    const [rows] = await connection.execute(`
        select count(*) as total_reviews
        from reviews
        where product_id = ?
        `, [productId]);
    return rows[0].total_reviews;
};


//  Medie voto recensione
export async function avgReviews(productId) {
    const [rows] = await connection.execute(`
        select avg(rating) as average_rating
        from reviews
        where product_id = ?;
        `, [productId]);
    return rows[0].average_rating ? Math.round(parseFloat(rows[0].average_rating)) : 0;
};