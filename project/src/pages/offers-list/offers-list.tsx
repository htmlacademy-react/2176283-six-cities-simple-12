import { Offers } from '../../types/offer';
import OfferCard from '../../components/card/card';

type OffersListProps = {
  offers: Offers;
  className: string;
  classList: string;
  onListOfferHover?: (listOfferId: number | null) => void;
}

function OffersList({ offers, className, classList, onListOfferHover }: OffersListProps): JSX.Element {

  if (onListOfferHover === null) {
    return <> </>;
  }

  return (
    <div className={classList}>

      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} className={className} onMouseOver={() => onListOfferHover?.(offer.id)} onMouseOut={() => onListOfferHover?.(null)}/>
      ))}

    </div>);
}

export default OffersList;
