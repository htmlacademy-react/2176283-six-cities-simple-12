import { Offers } from '../../types/offer';

type OffersListProps = {
  offers: Offers;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers} = props;
  return (<div></div>);
}

export default OffersList;
