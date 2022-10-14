import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class PricesClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context,
      {
        ...options,
        headers: {
          VtexIdClientAutCookie: context.authToken,
        },
      }
    )
  }

  public async getFixedPricesFromTable(itemId: string | string [], priceTableId: string | string [] ) {
    return this.http.getRaw(`http://api.vtex.com/${this.context.account}/pricing/prices/${itemId}/fixed/${priceTableId}`)
  }
}
