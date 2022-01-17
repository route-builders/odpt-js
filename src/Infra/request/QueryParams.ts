export type QueryParam = { [key: string]: string | string[] };

export type QueryParamsOptions = {
  delimiter?: string;
  defaultParams?: QueryParam;
};

type ParamsDict = { [key: string]: string[] };

export class QueryParams {
  private delimiter: string;
  private params: ParamsDict = {};

  public constructor(options: QueryParamsOptions = {}) {
    this.delimiter = options.delimiter ?? '&';
    if (typeof options.defaultParams !== 'undefined') this.set(options.defaultParams);
  }

  public add(params: QueryParam) {
    this.mapQueryParamsToDict(params);
  }

  public set(params: QueryParam) {
    this.mergeQueryParamsWithDict(params);
  }

  public remove(...keys: string[]) {
    for (const deleteKey of keys) {
      delete this.params[deleteKey];
    }
  }

  public clear() {
    this.params = {};
  }

  public toString(): string {
    return Object.entries(this.params)
      .map(([key, values]) => values.map((value) => `${key}=${value}`).join(this.delimiter))
      .join(this.delimiter);
  }

  private mergeQueryParamsWithDict(params: QueryParam): void {
    this.params = { ...this.params, ...this.normalizeQueryParam(params) };
  }

  private mapQueryParamsToDict(params: QueryParam): void {
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (!value) continue;

      const values = typeof value === 'string' ? [value] : value;
      const param = this.params[key];

      if (param) param.push(...values);
      else this.params;
    }
  }

  private normalizeQueryParam(params: QueryParam): { [key: string]: string[] } {
    return Object.fromEntries(
      Object.entries(params).map(([key, value]) => [key, typeof value === 'string' ? [value] : value])
    );
  }
}
