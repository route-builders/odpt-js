export class QueryParam {
  private key: string;
  private value: string;

  public constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }

  public toString(): string {
    return `${this.key}=${this.value}`;
  }
}
