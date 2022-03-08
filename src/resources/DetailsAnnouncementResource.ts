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
        amount,
        decimals: decimals || ''
      },
      picture: this.data.thumbnail,
      condition: this.data.condition,
      free_shipping: this.data.shipping.free_shipping,
      sold_quantity: this.data.sold_quantity,
      description: this.data.description
    };
  }
}

export { DetailsAnnouncementResource };
