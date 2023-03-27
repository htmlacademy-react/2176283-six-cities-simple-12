export const StickerProCard = ({premium}: {premium: boolean}) => {
  if (premium === true) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  else {
    return <> </>;
  }
};
