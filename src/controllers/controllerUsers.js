const path = require('path');
const fs = require('fs');
const { json } = require('express');

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
