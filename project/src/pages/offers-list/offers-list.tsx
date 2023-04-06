import { Offers } from '../../types/offer';
import OfferCard from '../../components/card/card';

type OffersListProps = {
  offers: Offers;
  onListOfferHover?: (listOfferId: number | null) => void;
}

function OffersList({ offers, onListOfferHover }: OffersListProps): JSX.Element {

  if (onListOfferHover === null) {
    return <> </>;
  }

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onMouseOver={() => onListOfferHover?.(offer.id)} onMouseOut={() => onListOfferHover?.(null)}/>
      ))}

    </div>);
}

export default OffersList;
