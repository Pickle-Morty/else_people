type WalletAccount = {
  chain: string;
  publicKey: string;
  address: string;
};

type WalletDevice = {
  appName: string;
  appVersion: string;
  maxProtocolVersion: number;
  platform: string;
  features: Array<{ name: string } | string>;
};

export type TonWallet = {
  account: WalletAccount;
  device: WalletDevice;
  name: string;
  appName: string;
  imageUrl?: string;
  aboutUrl?: string;
  openMethod?: string;
};
