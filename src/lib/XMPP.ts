import { client, xml } from "@xmpp/client";

export class XMPP {
  userName = "";
  password = "";
  server = "";
  connection: any = undefined;

  constructor(userName: string, password: string, server: string) {
    this.userName = userName;
    this.password = password;
    this.server = server;
  }

  connect = (): Promise<any> => {
    this.connection = client({
      service: "wss://jabb.im/websocket",
      domain: "jabb.im",
      password: this.password,
      username: this.userName
    });
    this.connection.on("message", (status: string) => {
      console.log("messaeg", status);
    });
    this.connection.on("data", (status: string) => {
      console.log("data", status);
    });
    this.connection.on("status", (status: string) => {
      console.log("🛈", "status of ws", status);
    });
    this.connection.on("error", (err: any) => {
      console.error(err.toString());
    });
    this.connection.on("online", async (address: any) => {
      console.log("▶", "online as", address.toString());
    });
    this.connection.on("input", (input: string) => {
      console.debug("⮈", input);
    });
    return this.connection.start();
  };

  message = (msg: string): Promise<any> => {
    const message = xml(
      "message",
      { type: "chat", to: `${this.server}@jabb.im` },
      xml("body", {}, msg)
    );
    return this.connection.send(message);
  };
}
