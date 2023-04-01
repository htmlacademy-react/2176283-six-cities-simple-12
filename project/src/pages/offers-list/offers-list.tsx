import { Offers } from '../../types/offer';
import OfferCard from '../../components/card/card';
import { useState } from 'react';

type OffersListProps = {
  offerCount: number;
  offers: Offers;
  onListOfferHover: Function;
}

function OffersList({ offerCount, offers, onListOfferHover }: OffersListProps): JSX.Element {

  const [ activeCard , setActiveCard ] = useState <number | null>(null);

  onListOfferHover(activeCard);

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.slice(0,offerCount).map((offer) => (
        <OfferCard key={offer.id} offer={offer} onMouseOver={() => setActiveCard(offer.id)} onMouseOut={() => setActiveCard(null)}/>
      ))}

    </div>);
}

export default OffersList;
