import { SensorDataService } from "./SensorDataService";

export const sensorDataService = new SensorDataService(`${process.env.API_URL}`)