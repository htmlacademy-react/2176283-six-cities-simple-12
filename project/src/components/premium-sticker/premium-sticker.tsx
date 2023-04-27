export const PremiumSticker = ({isPremium}: {isPremium: boolean}) => {
  if (isPremium === true) {
    return (
      <div className="property__mark">
        <span>Premium</span>
      </div>
    );
  }
  else {
    return <> </>;
  }
};
