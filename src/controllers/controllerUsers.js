const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');


module.exports = {
    login : (req,res)=>{
        return res.render('./users/login',{
            css : "users/login.css"
        })
    },
    register : (req, res)=>{
        return res.render('./users/register', {
            css: "users/register.css"
        })
    },

}
