import { Host } from '../../types/host';

export const stickerPro = (item: Host) => {
  if (item.isPro === true) {
    return ('--pro');
  }
  else { return ''; }
};
