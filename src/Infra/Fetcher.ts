import { FetcherInitOption } from './FetcherOption';
import { QueryParam } from './request/QueryParam';

export class Fetcher {
  private endpoint: string;
  private consumerKey: string;

  public constructor(option: FetcherInitOption) {
    this.endpoint = option.endpoint;
    this.consumerKey = option.consumerKey;
  }

  public get(path: string, queries: QueryParam[]) /* : string */ {
    queries.push(new QueryParam('acl:consumerKey', this.consumerKey));
    const query = queries.join('&');
    const url = `${this.endpoint}${path}?${query}`;
    // axios.get(url)
  }
}
