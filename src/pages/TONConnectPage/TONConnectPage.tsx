import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import type { FC } from "react";
import {
  UserWallet,
} from "../../modules/TONConnect/UserWallet/UserWallet";
import { Placeholder, Text } from "@telegram-apps/telegram-ui";
import { TonWallet } from "@/types/ton";

export const TONConnectPage: FC = () => {
  const wallet = useTonWallet();

  return wallet ? (
    <UserWallet wallet={wallet as TonWallet} />
  ) : (
    <Placeholder
      className="ton-connect-page__placeholder"
      header="TON Connect"
      description={
        <>
          <Text>
            Для отображения данных, связанных с TON Connect, необходимо
            подключить свой кошелек.
          </Text>
          <TonConnectButton className="ton-connect-page__button" />
        </>
      }
    />
  );
};
