import { Host } from '../../types/host';

export const StatusPro = ({host}: {host: Host}) => {
  if (host.isPro === true) {
    return (
      <span className="property__user-status">
        Pro
      </span>
    );
  } else {
    return <> </>;
  }
};
