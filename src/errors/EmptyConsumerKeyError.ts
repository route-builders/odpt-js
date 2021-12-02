/**
 * @class EmptyConsumerKeyError
 *
 * An error throwed when dewtect empty consumerKey.
 *
 * @since 1.0.0
 */
export class EmptyConsumerKeyError implements Error {
  name = EmptyConsumerKeyError.name;
  message: string;

  constructor() {
    this.message = 'Invalid consumerKey. Non-empty string Required.';
  }
}
