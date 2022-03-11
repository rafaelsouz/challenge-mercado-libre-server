import { DetailsAnnouncementWithDescription } from '../services/types';
import { separatorAmountDecimals } from '../utils/separatorAmountDecimals';

class DetailsAnnouncementResource {
  private data: DetailsAnnouncementWithDescription;

  constructor(data: DetailsAnnouncementWithDescription) {
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
      picture: this.data.pictures[0].url,
      condition: this.data.condition,
      free_shipping: this.data.shipping.free_shipping,
      sold_quantity: this.data.sold_quantity,
      description: this.data.description
    };
  }
}

export { DetailsAnnouncementResource };
