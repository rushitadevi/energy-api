"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = __importDefault(require("./config/db"));
const api_1 = __importDefault(require("./routes/api"));
const measurement_1 = __importDefault(require("./routes/measurement"));
const server = (0, express_1.default)();
exports.server = server;
// bodyparser is needed : if you write in req.body and if you dont write bodyparser, it wont parse data
// will give undefined.
// server.use(bodyParser.json());
const corsConfig = {
    origin: true,
    credentials: true,
    exposedHeaders: 'Authorization',
};
server.use((0, cors_1.default)(corsConfig)); // Enable CORSes
// server css as static
server.use(express_1.default.static(__dirname));
server.use((0, cookie_parser_1.default)());
// express.json works like body parser
server.use(express_1.default.json());
// call routes
server.use('/energy', api_1.default);
server.use('/measurement', measurement_1.default);
server.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});
server.get('/', (req, res) => {
    console.log('Welcome to Exnaton-energy!');
    console.log('req', req.cookies);
    res.send('Welcome to Exnaton-energy!');
});
// coonection to db
db_1.default.connect();
