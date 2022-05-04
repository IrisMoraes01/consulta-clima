import express from "express";
import climas from "./climaRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Consulte o clima'});
    });

    app.use(
        express.json(),
        climas
    );
}

export default routes;