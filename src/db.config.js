const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient;
const Bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const Get_Hash_Password = async(password) =>{
    const salt = await Bcrypt.genSalt();
    return await Bcrypt.hash(password, salt);
}

// admin function

const user_exist = async(pseudo) =>{
    return prisma.user.findFirst({
        where : {
            pseudo : pseudo
        }
    });
}

const add_user = async(data) =>{
    await prisma.user.create({
        data : {
            pseudo : data.pseudo,
            password : data.password
        }
    });
}

const delete_user = async(id) =>{
    try{
        prisma.user.delete({
            where : {
                id : id
            }
        })
    }
    catch(e){
        console.error(`Error : ${e.message}`);
    }
}

const get_token = async(data) =>{
    const token_user = jwt.sign(data, process.env.KEY_TOKEN);
    return token_user;
}

module.exports = {
    user_exist,
    Get_Hash_Password,
    add_user,
    delete_user,
    get_token
}