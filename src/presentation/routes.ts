import {Router} from "express";
import {AuthController} from "./auth/controller";


export class AppRoutes {


    static get routers(): Router {

        const router = Router()
        const controller = new AuthController()

        // Definir todas mis rutas principales

        router.post('./login', controller.loginUser)
        router.post('./register', controller.registerUser)



        return router
    }
}