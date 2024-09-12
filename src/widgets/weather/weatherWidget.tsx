import React, { useEffect, useState } from 'react';

const API_KEY = '8fbe44a588e5df8909b53e164a0560cf';

interface WeatherData {
  temperature: number;
  icon: string;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

        try {
          const response = await fetch(apiUrl);
          if (!response.ok) throw new Error('Error fetching the weather data');
          
          const data = await response.json();

          setWeather({
            temperature: Math.round(data.main.temp),
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          });
          setLoading(false);
        } catch (error) {
          setError('Could not fetch weather data');
          setLoading(false);
        }
      },
      (error) => {
        setError('Unable to get location');
        setLoading(false);
      }
    );
  }, []);

  if (loading) return null;
  if (error) return null;

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={weather?.icon}
        alt="Weather icon"
        style={{ width: '30px', height: '30px', cursor: 'pointer' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)} 
        onClick={() => setShowTooltip(!showTooltip)}
      />
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '30px',
            backgroundColor: '#000',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            whiteSpace: 'nowrap',
          }}
        >
          {weather?.temperature}°C
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
