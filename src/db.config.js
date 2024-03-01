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

const kick_user = async(id) =>{
    try{
        return prisma.user.update({
            where: {
                id : id
            },
            data : {
                active : false
            }
        })
    }
    catch(e){
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2025') {
              console.log(
                'There is a unique constraint violation, a new user cannot be created with this email'
              )
            }
          }
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
    kick_user,
    get_token
}