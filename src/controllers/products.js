import { createConnection } from "mysql2";
import connection from "../db/connections/connection.js";

async function index(request, response) {
    try{

    }catch{

    }
};


async function show(request, response) {

    const { id } = request.params;

    const query = `
        SELECT id, name, price, description, image
        FROM products p
        WHERE p.id = ?
    `;

    try {
        const [rows] = await connection.execute(query, [id]);

        if (rows.length === 0) {
            return response.status(404).json({
                error: 'Prodotto non trovato',
                results: null
            });
        }

        const product = rows[0];

        return response.json({
            results: product
        });

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            error: 'È successo qualcosa',
            results: null
        });
    }
}

async function create(request, response) {
    try{

    }catch{

    }
};

async function destroy(request, response) {
    try{

    }catch{

    }
};

async function modify(request, response) {
    try{

    }catch{

    }
};

export {index, show, create, destroy, modify};