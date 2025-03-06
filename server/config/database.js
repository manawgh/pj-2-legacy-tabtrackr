import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

// archie: const sequelize = new Sequelize('TabTrackr', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
const sequelize = new Sequelize('TabTrackr', 'nour', '', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

export default sequelize