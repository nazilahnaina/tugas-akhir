import {Sequelize} from "sequelize";

const db = new Sequelize('new_crud','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;