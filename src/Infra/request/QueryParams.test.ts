import { QueryParams, QueryParamsOptions } from './QueryParams';

describe('QueryParams', () => {
  describe('constructor', () => {
    it('should receive empty options then init as empty parameters.', () => {
      const queryParams = new QueryParams();

      const expected = '';
      expect(queryParams.toString()).toBe(expected);
    });

    it('should receive 1 param option then init as one parameter.', () => {
      const options: QueryParamsOptions = { defaultParams: { foo: '123' } };
      const queryParams = new QueryParams(options);

      const expected = 'foo=123';
      expect(queryParams.toString()).toBe(expected);
    });

    it('should receive 2 params option then init as default delimiter and two parameters.', () => {
      const options: QueryParamsOptions = { defaultParams: { foo: '123', bar: 'hogehoge' } };
      const queryParams = new QueryParams(options);

      const expected = 'foo=123&bar=hogehoge';
      expect(queryParams.toString()).toBe(expected);
    });

    it('should receive multi-valued params option then init as default delimiter and one paramkey with multi values.', () => {
      const options: QueryParamsOptions = { defaultParams: { hogehoge: ['123', '456', '789'] } };
      const queryParams = new QueryParams(options);

      const expected = 'hogehoge=123&hogehoge=456&hogehoge=789';
      expect(queryParams.toString()).toBe(expected);
    });

    it('should receive 2 params option with cutsom delimiter then init as the specific delimiter and two parameters.', () => {
      const options: QueryParamsOptions = { defaultParams: { foo: '123', bar: 'hogehoge' }, delimiter: '!' };
      const queryParams = new QueryParams(options);

      const expected = 'foo=123!bar=hogehoge';
      expect(queryParams.toString()).toBe(expected);
    });
  });

  describe('add', () => {
    // wip
  });
});
