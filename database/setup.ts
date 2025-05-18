import { Sequelize } from 'sequelize-typescript';
import { db, host, pass, user, } from '../config/postgres-db';
import Verification from '../models/verification';
import User from '@/models/user';


async function initializeDatabase() {
    const pg = await import('pg')
    const sequelize = new Sequelize({
        database: db,
        username: user,
        password: pass,
        host: host,
        port: 5432,
        dialect: 'postgres',
        models: [Verification, User],
        dialectModule: pg,
        logging: false,
    });

    // const sequelize = new Sequelize(
    //     `${dbConn}`,
    //     {
    //         dialect: 'postgres',
    //         dialectOptions: {
    //             ssl: {
    //                 require: true,
    //                 rejectUnauthorized: false, // Required for Neon or some managed PG services
    //             },
    //         },
    //         models: [Verification],
    //     logging: false,
    //     }
    // );

    // sequelize.sync( { alter: true});
    sequelize.sync();

    try {
        const start = async () =>{
            await sequelize.authenticate();
            console.info("Connected")
        }

        start();
    } catch (error) {
        console.info('unable to connect', error)
    }

    return sequelize
    
}


const sequelizePromise = initializeDatabase();
export default sequelizePromise;
