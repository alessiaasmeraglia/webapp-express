import { createConnection } from "mysql2";
import connection from "../db/connections/connection.js";

async function index(request, response) {
    try {

    } catch {

    }
};

async function show(request, response) {
    try {

    } catch {

    }
};

async function create(request, response) {
    try {
        const { name, description, price, ingredient, image } = request.body;

        if (!name || !price) {
            return response.status(400).json({
                success: false,
                message: "Nome e prezzo sono obbligatori"
            });
        }
        const [result] = await connection.query(
            `INSERT INTO products (name, description, price, ingredient,in_stock,updated_at,created_at,image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, description, price, ingredient, true, new Date(), new Date(), image]
        );
        return response.status(201).json({
            success: true,
            message: "Prodotto creato con successo",
            productId: result.insertId
        });
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            success: false,
            message: "Errore server"

        });
    }
};

async function destroy(request, response) {
    try {

    } catch {

    }
};

async function modify(request, response) {
    try {

    } catch {

    }
};

export { index, show, create, destroy, modify };