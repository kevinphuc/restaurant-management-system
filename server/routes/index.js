import { Router } from "express";
import { getAllFood,
        getFood,
        createFood,
        updateFood,
        login,
        deleteFood
} from
    "../handlers/index.js";

const appRouter = Router();
appRouter.get("/food", getAllFood);
appRouter.get("/food/:id", getFood);
appRouter.post("/food/create", createFood);
appRouter.delete("/food/delete/:id", deleteFood);
appRouter.post("/food/update/:id", updateFood);

appRouter.post("/login", login)



export default appRouter;