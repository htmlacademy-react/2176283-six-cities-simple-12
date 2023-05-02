import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet, { Marker } from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offers;
  className: string;
  selectedOffer: object;
  currentOfferId?: number;
}

function Map({city, offers, className, selectedOffer, currentOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: './img/pin.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: './img/pin-active.svg',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);
      markerGroup.clearLayers();
      offers.forEach((offer) => {
        const marker = new Marker ({
          lat: offer.location.latitude,
          lng: offer.location.longitude,});
        if (className === 'cities__map') {
          marker.setIcon(
            offer === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          ).addTo(markerGroup);
        } else {
          marker.setIcon(
            currentOfferId === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerGroup);
        }
      });
      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [className, currentCustomIcon, currentOfferId, defaultCustomIcon, map, offers, selectedOffer]);

  return (
    <section className={`${className} map`}
      style={{height: '600px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
