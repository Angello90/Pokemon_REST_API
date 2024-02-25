const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient;
const Bcrypt = require('bcrypt');


const Get_Hash_Password = async(password) =>{
    const salt = await Bcrypt.genSalt();
    return await Bcrypt.hash(password, salt);
}

const user_exist = async(pseudo, password) =>{
    console.log("hello world");
}

module.exports = {
    user_exist
}