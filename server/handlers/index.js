import {findAllFood,
        findFoodById,
        createFoodById,
        updateFoodById,
        deleteFoodById
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
    const {fid, name, price} = req.body;
    if(!fid || !name || !price){
            return res.status(404).json({Message: "inputs are not provided"})
        }
    try {
        const food = await createFoodById(fid, name, price);
        return res.status(201).json({Message: "Food created succesfully!",
        food})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error occured"})
    }
};

export const updateFood = async(req, res) =>{
    const {name, price} = req.body;
    const fid = req.params.id;
    try {
        const course = await updateFoodById(fid, name, price);
        return res.status(201).json({Message: "Food updated succesfully!",
                                    course})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error occured"})
    }
};

export const deleteFood = async(req, res) =>{
    const fid = req.params.id;
    try {
        const course = await deleteFoodById(fid);
        return res.status(201).json({Message: "Food deleted succesfully!", course})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error occured"})
    }
};