import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "20.51.251.129",
    port: 3306,
    username: "admin",
    password: "Admin123",
    database: "nuwest",
    synchronize: true,
    logging: false,
    //entities: [User],
    migrations: [],
    subscribers: [],
})
