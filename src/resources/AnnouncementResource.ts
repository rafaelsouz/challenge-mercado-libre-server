import { Announcement } from '../services/types';
import { separatorAmountDecimals } from '../utils/separatorAmountDecimals';

class AnnouncementResource {
  private data: Announcement;

  constructor(data: Announcement) {
    this.data = data;
  }

  parse() {
    const [amount, decimals] = separatorAmountDecimals(this.data.price);

    return {
      id: this.data.id,
      title: this.data.title,
      price: {
        currency: this.data.currency_id,
        amount: Number(amount),
        decimals: Number(decimals) || 0
      },
      picture: this.data.thumbnail,
      condition: this.data.condition,
      free_shipping: this.data.shipping.free_shipping
    };
  }
}

export { AnnouncementResource };
