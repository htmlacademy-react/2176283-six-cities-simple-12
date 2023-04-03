import { Offers } from '../../types/offer';
import OfferCard from '../../components/card/card';

type OffersListProps = {
  offerCount: number;
  offers: Offers;
  onListOfferHover: (listOfferId: number | null) => void;
}

function OffersList({ offerCount, offers, onListOfferHover }: OffersListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.slice(0,offerCount).map((offer) => (
        <OfferCard key={offer.id} offer={offer} onMouseOver={() => onListOfferHover(offer.id)} onMouseOut={() => onListOfferHover(null)}/>
      ))}

    </div>);
}

export default OffersList;
