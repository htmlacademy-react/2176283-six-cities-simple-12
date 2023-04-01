import { useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-Map';
import { City } from '../../types/city';
import { Offers } from '../../types/offer';

type MapProps = {
  city: City;
  offers: Offers;
}

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  //для отображения всех предложений
  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  //для отображения выбранного предложения
  const currentCustomIcon = leaflet.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [defaultCustomIcon, map, offers]);

  return (
    <div
      style={{height: '560px'}}
      ref={mapRef}
    >
    </div>

  );
}

export default Map;
