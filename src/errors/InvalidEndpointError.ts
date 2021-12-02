/**
 * @class InvalidEndpointError
 *
 * An error throwed when receive invalid endpoint
 *
 * @since 1.0.0
 */
export class InvalidEndpointError implements Error {
  name = InvalidEndpointError.name;
  message: string;

  constructor(endpoint: string) {
    this.message = `Invalid endpoint: "${endpoint}"`;
  }
}
