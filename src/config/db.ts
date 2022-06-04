import mongoose, { ConnectOptions } from 'mongoose'

export class DB {
    private databaseUrl: string
    constructor(url?: string) {
        this.databaseUrl = url || process.env.DATABASE_URL!
    }

    connect = () => {
        try {
            mongoose.connect(`${this.databaseUrl}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions)
            mongoose.connection.on('error', (error) => {
                console.error('error', error)
                console.error('failed to connect to database')
                process.exit(1)
            })
            mongoose.connection.once('open', () => {
                console.log('db connected!')
            })
        } catch (error) {
            console.log('Error on coonectDB')
            console.log(error)
        }
    }
}

export default new DB()
// const connect = () => {
//     try {
//         mongoose.connect(`${process.env.DATABASE_URL}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         } as ConnectOptions)
//         mongoose.connection.on('error', (error) => {
//             console.error('error', error)
//             console.error('failed to connect to database')
//             process.exit(1)
//         })
//         mongoose.connection.once('open', () => {
//             console.log('db connected!')
//         })
//     } catch (error) {
//         console.log('Error on coonectDB')
//         console.log(error)
//     }
// }

// export default { connect }
