import { Locations } from '../../types/location';

type LocationsListProps = {
  locations: Locations;
}

function LocationsList({locations}: LocationsListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location, index) => (
        <li key={`${index + 1}-${location.title}`} className="locations__item">
          <a className="locations__item-link tabs__item" href="#todo">
            <span>{location.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationsList;
