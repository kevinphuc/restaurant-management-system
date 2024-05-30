import {findAllFood,
        findFoodById,
        createFoodById
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