import {findAllFood,
    findFoodById,
    createFoodById,
    updateFoodById,
    deleteFoodById,
    getUserByEmail,
    getUserRole,
    appendFood_Course,
    findFoodOfCourseById
} from "../DB/queries.js";

export const getAllFood = async (req, res) => { 
try {
    const food = await findAllFood();
    return res.status(200).json({food})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}    
};

export const getFood = async (req, res) => {
try {
    const food_id = req.params.id;
    const food = await findFoodById(food_id);
    return res.status(200).json({food})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};

export const createFood = async (req, res) => {
const {name, description, price} = req.body;
if(!name || !description || !price){
        return res.status(404).json({Message: "inputs are not provided"})
    }
try {
    const food = await createFoodById(name, description, price);
    return res.status(201).json({Message: "Food created succesfully!",
    food})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};

export const deleteFood = async(req, res) =>{
const fid = req.params.id;
try {
    const food = await deleteFoodById(fid);
    return res.status(201).json({Message: "Food deleted succesfully!",
        food})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};

export const updateFood = async(req, res) =>{
const {name, description, price} = req.body;
const fid = req.params.id;
try {
    const course = await updateFoodById(fid, name, description, price);
    return res.status(201).json({Message: "Food updated succesfully!",
                                course})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};

export const login = async (req, res) => {
try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await getUserByEmail(email);
    const user_role = await getUserRole(user[0][0].uid);
    if (user.length > 0){
        if (password == user[0][0].password) {
            return res.json({Status: "Success", Role: {user_role}})
        } else {
            return res.json({Error: "Password not matched"})
        }
    } else {
        return res.json({Error: "No email existed"})
    }
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};

export const createFood_course = async(req, res) =>{
const addedFood = req.body;
try {
    const course_id = await appendFood_Course(addedFood);
    return res.status(201).json({course_id: course_id})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};

export const getFoodByCourse = async (req, res) => {
try {
    const course_id = req.params.id;
    const food = await findFoodOfCourseById(course_id);
    return res.status(200).json({food})
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Error occured"})
}
};