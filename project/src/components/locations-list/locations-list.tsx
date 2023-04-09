//import { Locations } from '../../types/location';
import { CITIES } from '../../const';
import { City } from '../../types/city';


type LocationsListProps = {
  locations: City;
  onClickCity: (city: City) => void;
  }

function LocationsList({locations, onClickCity}: LocationsListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((CITY, index) => (
        <li key={`${index + 1}-${CITY.title}`} className="locations__item">
          <a className={`locations__item-link tabs__item ${locations.title === CITY.title ? 'tabs__item--active' : ''}`}
            href="#todo"
            onClick={(evt) => {
              evt.preventDefault();
              onClickCity(CITY);
            }}
          >
            <span>{CITY.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationsList;
