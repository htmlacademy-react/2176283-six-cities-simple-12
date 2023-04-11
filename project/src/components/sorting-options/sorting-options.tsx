import { SORTING_LIST } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { openSorting } from '../../store/action';
import { Offers } from '../../types/offer';

type SortingOptionsProps ={
  offers:Offers;
}

function SortingOptions({offers}: SortingOptionsProps): JSX.Element {

  const dispatch = useAppDispatch();
  const isOpenSorfing = useAppSelector((state) => state.isOpenSort);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => dispatch(openSorting())}>
              Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSorfing ? 'places__options--opened' : ''}`} >
        {SORTING_LIST.map((sorting, id) => (
          <li key={sorting.label} className="places__option" tabIndex={id}>{sorting.label}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
