import { BusRepository } from './Domain/Repository/BusRepository';
import { Fetcher } from './Infra/Fetcher';
import { OdptInitOption } from './OdptInitOption';
import { OdptOptionValidator } from './validator/Odpt/OdptOptionValidator';

export type OdptDefaultOption = Required<OdptInitOption>;

const odptDefaultOption: OdptDefaultOption = {
  consumerKey: '',
  endpoint: 'https://api.odpt.org',
};

/**
 * entrypoint class
 *
 * @author up-tri
 * @since 1.0.0
 */
export class Odpt {
  private consumerKey: string;
  private endpoint: string;

  // DI
  private fetcher: Fetcher;
  private busRepository: BusRepository;

  public constructor(option: OdptInitOption) {
    const mergedOption = { ...odptDefaultOption, ...option };
    this.consumerKey = mergedOption.consumerKey;
    this.endpoint = mergedOption.endpoint;

    OdptOptionValidator.validate(mergedOption);

    this.fetcher = new Fetcher({ endpoint: this.endpoint, consumerKey: this.consumerKey });
    this.busRepository = new BusRepository(this.fetcher);
  }

  public getBuses() {
    this.busRepository.getBuses();
  }
}
