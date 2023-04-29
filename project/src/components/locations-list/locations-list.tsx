import { cities } from '../../const';
import { City } from '../../types/city';

type LocationsListProps = {
  locations: City;
  onCityClick: (city: City) => void;
  }

function LocationsList({locations, onCityClick}: LocationsListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((CITY, index) => (
        <li key={`${index + 1}-${CITY.title}`} className="locations__item">
          <a className={`locations__item-link tabs__item ${locations.title === CITY.title ? 'tabs__item--active' : ''}`}
            href="#todo"
            onClick={(evt) => {
              evt.preventDefault();
              onCityClick(CITY);
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
