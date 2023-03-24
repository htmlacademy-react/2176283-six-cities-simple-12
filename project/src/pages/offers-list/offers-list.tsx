import { Offers } from '../../types/offer';
import OfferCard from '../../components/card/card';
import { useState } from 'react';

type OffersListProps = {
  offerCount: number;
  offers: Offers;
}

function OffersList({ offerCount, offers }: OffersListProps): JSX.Element {
  const [ , setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.slice(0,offerCount).map((offer) => (
        <article key={offer.id} className="cities__card place-card" onMouseOver={handleMouseOver}>
          <OfferCard key={offer.id} offer={offer}/>
        </article>))}

    </div>);
}

export default OffersList;
