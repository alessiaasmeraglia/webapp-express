import { createConnection } from "mysql2";
import connection from "../db/connections/connection.js";

async function index(request, response) {
    try{

    }catch{

    }
};

async function show(request, response) {
    try{

    }catch{

    }
};

async function create(request, response) {
    
//     connection.execute(`INSERT INTO reviews (product_id, name, text_review, rating, title) 
// VALUES ('valore1', 'valore2');`)
    const newReviewName = request.newReviewName;
    const newReviewProductId = request.newReviewProductId;
    const newTextReview = request.newTextReview;
    const newReviewRating = request.newReviewRating;
    const newReviewTitle = request.newReviewTitle;
    
    try {
        await connection.execute(`INSERT INTO reviews (product_id, name, text_review, rating, title)
            VALUES ('${newReviewProductId}', '${newReviewName}', '${newTextReview}', '${newReviewRating}', '${newReviewTitle}');`)
    } catch (error) {
        throw error;
    }
    
    
    response.status(200).json({
        success: true
    })
    return;
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