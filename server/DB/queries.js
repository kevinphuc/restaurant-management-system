import { pool } from "./index.js";

export const findAllFood = async () => {
    const QUERY = "SELECT * FROM food";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        client.destroy();
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
        client.destroy();
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
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in createMajor(): ");
        console.log(error);
        throw error;
    }
    
}

export const updateFoodById = async (fid, name, price) => {
    const QUERY = 'UPDATE food SET name = ?, price = ? WHERE fid = ? ';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [name, price, fid]);
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in updateFoodById(): ");
        console.log(error);
        throw error;
    }
}

export const deleteFoodById = async (fid) => {
    const QUERY = 'DELETE FROM food WHERE fid = ? ';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [fid]);
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in deleteFood(): ");
        console.log(error);
        throw error;
    }
}