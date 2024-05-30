import { pool } from "./index.js";

export const findAllFood = async () => {
    const QUERY = "SELECT * FROM food";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result[0];
    } catch (error) {
        console.log("Error in findAllFood(): ");
        console.log(error);
        throw error;
    }
    
}

export const findFoodById = async (id) => {
    const QUERY = "SELECT * FROM food WHERE fid = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        return result[0];
    } catch (error) {
        console.log("Error in findMajorById(): ");
        console.log(error);
        throw error;
    }
    
}

export const createFoodById = async (fid, name, price
) => {
    const QUERY = "INSERT INTO food (fid, name, price) VALUES (?, ?, ?)";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [fid, name, price]);
        return result;
    } catch (error) {
        console.log("Error in createMajor(): ");
        console.log(error);
        throw error;
    }
    
}