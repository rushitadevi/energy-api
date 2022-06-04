import { Request, Response } from 'express'
import axios from 'axios'
import config from '../config/config'
import measurements from '../controllers/measurement'

const { BASE_URL, muid } = process.env

const postApiMeasurement = async (req: Request, res: Response) => {
    try {
        const response = await axios.post(`${BASE_URL}auth/auth`, req.body, {})
        if (!response)
            throw new Error('Something went wrong, please try again.')

        res.send({
            cookie: response.headers['set-cookie'],
            user: response.data,
        })
    } catch (error) {
        console.log('error on postMeasuresumentData')
        console.log(error)
    }
}

const getApiMeasurement = async (req: Request, res: Response) => {
    try {
        // set params to api
        const params = {
            muid,
            start: '2022-04-01',
            stop: '2022-05-01',
            measurement: 'energy',
            limit: 10,
        }

        // call to api
        const response = await axios.get(
            `${BASE_URL}meterdata/measurement`,
            config.getAuthorizationConfig(params, req.params.cookie)
        )
        if (!response) return res.send('Something went wrong!')

        // save it into database
        const savedData = await measurements.createMeasurements(response.data)

        // send saved data to front end
        res.send({ dbData: savedData })
    } catch (error: any) {
        // eslint-disable-next-line prettier/prettier
        console.log(error!.response!.data)
        res.send(error!.response!.data || 'Something went wrong')
    }
}

export default { postApiMeasurement, getApiMeasurement }
