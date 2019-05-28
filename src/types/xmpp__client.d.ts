declare module '@xmpp/client' {
  export interface IClient {
    on: (event: string, callback: any) => Promise<any>;
    start: () => Promise<any>;
    send: (message: string) => Promise<any>;
  }
  export function client(options: any): IClient;
  export function xml(
    name: string,
    attrs?: string | { [key: string]: any },
    ...children: xml.ElementChild[]
  ): xml.Element;
}
