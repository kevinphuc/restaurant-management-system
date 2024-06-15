import { pool } from "./index.js";

const { v4: uuidv4 } = require('uuid');

//Menu APIs
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

export const deleteFoodById = async (id) => {
    const QUERY = 'DELETE FROM food WHERE fid = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in deleteFoodById(): ");
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

//User authentication APIs
export const getUserByEmail = async (email) => {
    const QUERY = 'SELECT * from users WHERE email = ? ';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [email]);
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in getUser(): ");
        console.log(error);
        throw error;
    }
}

export const getUserRole = async (user_id) => {
    const QUERY = 'SELECT name FROM roles INNER JOIN role_user ON rid = role_id WHERE user_id = ?';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [user_id]);
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in getUser(): ");
        console.log(error);
        throw error;
    }
}
