import { Offers } from '../../types/offer';
import OfferCard from '../../components/card';

type OffersListProps = {
  offerCount: number;
  offers: Offers;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers} = props;
  const {offerCount} = props;
  const template = offers.map((offer) => (<OfferCard key={offer.id} offer={offer}/>));

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        template.slice(0,offerCount)
      }
    </div>);
}

export default OffersList;
