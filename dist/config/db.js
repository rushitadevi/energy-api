"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    try {
        mongoose_1.default.connect(`${process.env.DATABASE_URL}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoose_1.default.connection.on('error', (error) => {
            console.error('error', error);
            console.error('failed to connect to database');
            process.exit(1);
        });
        mongoose_1.default.connection.once('open', () => {
            console.log('db connected!');
        });
    }
    catch (error) {
        console.log('Error on coonectDB');
        console.log(error);
    }
};
exports.default = { connect };
