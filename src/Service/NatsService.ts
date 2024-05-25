import { connect, ConnectionOptions, NatsConnection, StringCodec } from "nats";

export class NatsService {
  private _client?: NatsConnection;
  private _stringCodec = StringCodec();
  private _natsConfig: ConnectionOptions;

  constructor(configs: ConnectionOptions) {
    this._natsConfig = configs;
  }

  public async connect(): Promise<void> {
    try {
      this._client = await connect(this._natsConfig);
    } catch (error) {
      console.error("Error connecting to NATS:", error);
      throw error;
    }
  }

  get client() {
    console.log("COMMON => NATS CONFIG ===> ", this._natsConfig);
    if (!this._client) throw new Error("NATS client not initialized");

    return this._client;
  }

  async publish(subject: string, data: any) {
    try {
      this.client.publish(
        subject,
        this._stringCodec.encode(JSON.stringify(data))
      );
    } catch (error) {
      console.error("Error publishing message:", error);
      throw error;
    }
  }

  async subscribe(subject: string, callback: (msg: any) => void) {
    try {
      const subscribtion = this.client.subscribe(subject);

      for await (const msg of subscribtion) {
        callback(JSON.parse(this._stringCodec.decode(msg.data)));
      }
    } catch (error) {
      console.error("Error subscribing to NATS:", error);
      throw error;
    }
  }

  async close() {
    if (this._client) await this._client.drain();
  }
}
