import { IOClients } from '@vtex/api'
import PricesClient from './prices'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {


  public get prices() {
    return this.getOrSet('prices', PricesClient)
  }
}
