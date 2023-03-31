import {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-Map';
import { City } from '../../types/city';

type MapProps = {
  city: City;
}

function Map({city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div
      style={{height: '560px'}}
      ref={mapRef}
    >
    </div>

  );
}

export default Map;
