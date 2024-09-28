const {Sequelize} = require("sequelize");

const sequelize0 = new Sequelize(
    'wt_proj',
    'root',
    'Japtor@1999',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

const sequelize = new Sequelize('wt_proj', 'root', 'Japtor@1999', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;
