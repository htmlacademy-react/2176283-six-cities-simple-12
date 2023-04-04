import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: object;
}

function Map({city, offers, selectedOffer}: MapProps): JSX.Element {
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
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer === selectedOffer)
              ? currentCustomIcon
              : defaultCustomIcon,

          })
          .addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, offers, selectedOffer]);

  return (
    <div
      style={{height: '580px'}}
      ref={mapRef}
    >
    </div>

  );
}

export default Map;
