const path = require('path');
const db = require('../../database/models');


const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

module.exports = {
    list: (req,res) => {
        db.Style.findAll()
        .then(styles => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: styles.length,
                    url: 'api/styles'
                },
                data: styles
            }
                res.json(respuesta);
            })
    }
}
