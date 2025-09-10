export type AirQuality = {
  id: string;
  tanggal: string;
  jam: string;
  no2: string;
  so2: string;
  pm25: string;
  co?: string;
  o3?: string;
  hc?: string;
  pm10?: string;
  ws: string;
  wd: string;
  humidity: string;
  temperature: string;
  pressure: string;
  sr: string;
  uv: string;
  rain_intensity: string;
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
