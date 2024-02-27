const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient;
const Bcrypt = require('bcrypt');


const Get_Hash_Password = async(password) =>{
    const salt = await Bcrypt.genSalt();
    return await Bcrypt.hash(password, salt);
}

// admin function

const user_exist = async(pseudo, password) =>{
    return prisma.user.findFirst({
        where : {
            pseudo : pseudo
        }
    })
}

const add_user = async(data) =>{
    prisma.user.create(data);
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

module.exports = {
    user_exist,
    Get_Hash_Password,
    add_user,
    delete_user
}