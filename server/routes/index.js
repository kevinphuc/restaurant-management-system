import { Router } from "express";
import { getAllFood,
        getFood,
        createFood
} from
    "../handlers/index.js";

const appRouter = Router();
appRouter.get("/food", getAllFood);
appRouter.get("/food/:id", getFood);
appRouter.post("/food/create", createFood);


export default appRouter;