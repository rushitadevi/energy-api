"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config/config"));
const measurement_1 = __importDefault(require("../controllers/measurement"));
const { BASE_URL, muid } = process.env;
const postApiMeasurement = async (req, res) => {
    try {
        const response = await axios_1.default.post(`${BASE_URL}auth/auth`, req.body, {});
        if (!response)
            throw new Error('Something went wrong, please try again.');
        res.send({
            cookie: response.headers['set-cookie'],
            user: response.data,
        });
    }
    catch (error) {
        console.log('error on postMeasuresumentData');
        console.log(error);
    }
};
const getApiMeasurement = async (req, res) => {
    try {
        // set params to api
        const params = {
            muid,
            start: '2022-04-01',
            stop: '2022-05-01',
            measurement: 'energy',
            limit: 10,
        };
        // call to api
        const response = await axios_1.default.get(`${BASE_URL}meterdata/measurement`, config_1.default.getAuthorizationConfig(params, req.params.cookie));
        if (!response)
            return res.send('Something went wrong!');
        // save it into database
        const savedData = await measurement_1.default.createMeasurements(response.data);
        // send saved data to front end
        res.send(savedData).status(200);
    }
    catch (error) {
        // eslint-disable-next-line prettier/prettier
        console.log(error.response.data);
        res.send(error.response.data || 'Something went wrong');
    }
};
exports.default = { postApiMeasurement, getApiMeasurement };
