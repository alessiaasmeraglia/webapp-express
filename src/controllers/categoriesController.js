import connection from "../db/connections/connection.js";

async function index(request, response) {
    try{
        const [rows] = await connection.query('select id, name, description from categories');

        response.json({
            error:null,
            results: rows
        })

    } catch(error) {
        response.status(500).json({
            error: 'Errore di caricamento',
            results: []
        })
    }
};

async function show(request, response) {
    try{

    } catch(error) {

    }
};

export {index, show}