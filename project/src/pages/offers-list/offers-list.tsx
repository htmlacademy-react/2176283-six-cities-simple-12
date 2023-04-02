import { Offers } from '../../types/offer';
import OfferCard from '../../components/card/card';
import { useEffect, useState } from 'react';

type OffersListProps = {
  offerCount: number;
  offers: Offers;
  onListOfferHover: (listOfferId: number | null) => void;
}

function OffersList({ offerCount, offers, onListOfferHover }: OffersListProps): JSX.Element {

  const [ activeCard , setActiveCard ] = useState <number | null>(null);

  useEffect(() => {onListOfferHover(activeCard);},);

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.slice(0,offerCount).map((offer) => (
        <OfferCard key={offer.id} offer={offer} onMouseOver={() => setActiveCard(offer.id)} onMouseOut={() => setActiveCard(null)}/>
      ))}

    </div>);
}

export default OffersList;
