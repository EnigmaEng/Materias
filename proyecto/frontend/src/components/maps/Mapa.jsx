import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Mapa = ({ direccion }) => {

    const apiKey = import.meta.env.VITE_GOOGLE_MAP
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    // Función para realizar la geocodificación para cada registro
    const geocodeRegistros = async () => {
      const nuevasUbicaciones = [];

      // Iterar sobre cada registro y realizar la geocodificación
      for (const direccion of direccion) {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
              direccion.direccion
            )}&key=${apiKey}`
          );
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            nuevasUbicaciones.push({ latitud: lat, longitud: lng });
          } else {
            console.error(`No se encontraron resultados de geocodificación para ${direccion.direccion}`);
          }
        } catch (error) {
          console.error(`Error al realizar la geocodificación para ${direccion.direccion}:`, error);
        }
      }

      setUbicaciones(nuevasUbicaciones);
    };

    // Llamar a la función de geocodificación cuando cambien los registros
    geocodeRegistros();
  }, [direccion]);

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={5} center={{ lat: 0, lng: 0 }}>
        {ubicaciones.map((ubicacion, index) => (
          <Marker key={index} position={ubicacion} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;
