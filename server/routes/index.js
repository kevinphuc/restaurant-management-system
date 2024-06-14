import { Router } from "express";
import { getAllFood,
        getFood,
        createFood,
        updateFood,
        deleteFood
} from
    "../handlers/index.js";

const appRouter = Router();
appRouter.get("/food", getAllFood);
appRouter.get("/food/:id", getFood);
appRouter.post("/food/create", createFood);
appRouter.post("/food/update/:id", updateFood);
appRouter.delete("/food/delete/:id", deleteFood);



export default appRouter;