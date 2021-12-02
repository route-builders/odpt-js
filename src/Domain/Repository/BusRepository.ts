import { Fetcher } from '../../Infra/Fetcher';
import { QueryParam } from '../../Infra/request/QueryParam';

const pathes = {
  bus: '/api/v4/odpt:Bus',
};

export class BusRepository {
  private fetcher: Fetcher;
  public constructor(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }

  public getBuses() {
    const queries: QueryParam[] = [
      // new QueryParam(...)
    ];
    this.fetcher.get(pathes.bus, queries);
  }
}
