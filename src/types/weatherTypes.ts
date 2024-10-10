interface WeatherLocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  region: string;
}

interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

interface WeatherCurrent {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
}

export interface WeatherData {
  location: WeatherLocation;
  current: WeatherCurrent;
}
