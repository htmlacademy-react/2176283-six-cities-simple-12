export const premiumSticker = (item: boolean) => {
  if (item === true) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  else {
    return '';
  }
};

export const star = (item: number) => `${Math.round(item) * 20}%`;
