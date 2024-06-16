import { Router } from "express";
import { getAllFood,
        getFood,
        createFood,
        updateFood,
        deleteFood,
        login,
        createFood_course,
        getFoodByCourse
} from
    "../handlers/index.js";

const appRouter = Router();
appRouter.get("/food", getAllFood);
appRouter.get("/food/:id", getFood);
appRouter.post("/food/create", createFood);
appRouter.delete("/food/delete/:id", deleteFood);
appRouter.post("/food/update/:id", updateFood);

appRouter.post("/login", login)

appRouter.post("/course/add_food_course", createFood_course);
appRouter.get("/course/:id", getFoodByCourse);


export default appRouter;