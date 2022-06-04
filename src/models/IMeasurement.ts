export default interface IMeasurementModel {
    data: [IMeasuremnt]
    status: number
}

interface IMeasuremnt {
    measurement: string
    tags: {}
    timestamp: Date
    '0100011D00FF': number
    '0100021D00FF': number
    '0100010800FF': number
    '0100020800FF': number
    '0100100800FF': number
}
