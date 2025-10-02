export type AirQuality = {
  id: number;
  tanggal: string;
  jam: string;
  no2: number;
  so2: number;
  pm25: number;
  co?: number;
  o3?: number;
  hc?: number;
  pm10?: number;
  ws: number;
  wd: number;
  humidity: number;
  temperature: number;
  pressure: number;
  sr: number;
  uv: number;
  rain_intensity: number;
  stat_conn: string;
  feedback: string;
  feedback2: string;
};

export type Location = {
  id: number;
  lat: number;
  long: number;
  updatedAt: string;
  createdAt: string;
};
