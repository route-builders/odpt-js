import { EmptyConsumerKeyError } from '../../errors/EmptyConsumerKeyError';
import { InvalidEndpointError } from '../../errors/InvalidEndpointError';
import { OdptDefaultOption } from '../../Odpt';

export class OdptOptionValidator {
  private static endpointRegex = /^https?:\/\/.+/;

  public static validate(v: OdptDefaultOption): boolean {
    if (v.consumerKey === '') {
      throw new EmptyConsumerKeyError();
    }

    if (!this.endpointRegex.test(v.endpoint)) {
      throw new InvalidEndpointError(v.endpoint);
    }

    return true;
  }
}
