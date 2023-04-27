export const StickerProCard = ({isPremium}: {isPremium: boolean}) => {
  if (isPremium === true) {
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
