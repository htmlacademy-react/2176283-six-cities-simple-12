export const PremiumSticker = ({premium}: {premium: boolean}) => {
  if (premium === true) {
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
