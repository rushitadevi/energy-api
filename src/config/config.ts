import { AxiosRequestConfig } from 'axios'
import { config as dotenv } from 'dotenv'
dotenv()

const getAuthorizationConfig = (params: any = null, cookie?: string) => {
    const config: AxiosRequestConfig = {}
    config.headers = {
        // Cookie: cookie,
        cookie: cookie ? cookie : '',
        'Access-Control-Expose-Headers': '*',
    }
    if (params) config.params = params
    config.timeout = 60000 * 5 // 5 mins

    console.log(config, 'config')
    return config
}
console.log("hi")

export default { getAuthorizationConfig }
