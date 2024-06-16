import { pool } from "./index.js";

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
    const QUERY = "SELECT * FROM food WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        client.destroy();
        return result[0];
    } catch (error) {
        console.log("Error in findFoodById(): ");
        console.log(error);
        throw error;
    }
    
}

export const createFoodById = async (name, description, price
) => {
    const QUERY = "INSERT INTO food (name, description, price) VALUES (?, ?, ?)";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [name, description, price]);
        client.destroy();
        return result;
    } catch (error) {
        console.log("Error in createFoodById(): ");
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

export const updateFoodById = async (fid, name, description, price) => {
    const QUERY = 'UPDATE food SET name = ?, description = ?, price = ? WHERE id = ? ';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [name, description, price, fid]);
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

//Place order APIs
export const findAllCourses = async () => {
    const QUERY = "SELECT * FROM course";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        client.destroy();
        return result[0];
    } catch (error) {
        console.log("Error in findAllCourses(): ");
        console.log(error);
        throw error;
    }
    
}

export const findCourse = async (id) => {
    const QUERY = "SELECT * FROM course WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        client.destroy();
        return result[0];
    } catch (error) {
        console.log("Error in findCourse(): ");
        console.log(error);
        throw error;
    }
    
}

export const createCourse = async () => {
    const QUERY = "INSERT INTO course (name, description) VALUES (?, ?)";
    const name = "Customer's course"
    const đescription = "Order by customers"
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [name, đescription]);
        client.destroy();
        return result[0];
    } catch (error) {
        console.log("Error in createCourse(): ");
        console.log(error);
        throw error;
    }
    
}

export const findFoodOfCourseById = async (id) => {
    const QUERY = "SELECT * FROM food INNER JOIN course_food ON food.id = course_food.fid WHERE cid = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        client.destroy();
        return result[0];
    } catch (error) {
        console.log("Error in findFoodOfCourseById(): ");
        console.log(error);
        throw error;
    }
    
}

export const appendFood_Course = async (addedFood) => {
    const processFood = async (course_id, addedFood) => {
        for(const food of addedFood){
            const QUERY = "INSERT INTO course_food (cid, fid, ETA, quantity, status) VALUES (?, ?, ?, ?, ?)"
            const status = "ordered"
            const ETA = null
            const client = await pool.getConnection();
            await client.query(QUERY, [course_id, food.fid, ETA, food.quantity, status]);
            client.destroy();    
        }
    }
    try {
        const newCourse = await createCourse()
        const new_course_id = newCourse.insertId
        await processFood(new_course_id, addedFood)
        return new_course_id
    } catch (error) {
        console.log("Error in appendFood_Course(): ");
        console.log(error);
        throw error;
    }
    
}