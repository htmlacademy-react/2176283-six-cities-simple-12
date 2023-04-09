import { SORTING_LIST } from '../../const';

function SortingOptions(): JSX.Element {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
              Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SORTING_LIST.map((sorting, id) => (
          <li key={sorting.label} className="places__option" tabIndex={id}>{sorting.label}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
