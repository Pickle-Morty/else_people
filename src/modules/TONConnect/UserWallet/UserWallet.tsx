import { useUtils } from "@telegram-apps/sdk-react";
import { TonConnectButton } from "@tonconnect/ui-react";
import {
  Avatar,
  Cell,
  List,
  Navigation,
  Section,
  Title,
} from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { DisplayData } from "@/components/DisplayData/DisplayData";
import styles from "./UserWallet.module.scss";
import { TonWallet } from "@/types/ton";



export type WalletProps = {
  wallet: TonWallet;
};

export const UserWallet: FC<WalletProps> = ({ wallet }) => {
  const utils = useUtils();
  const {
    account: { chain, publicKey, address },
    device: { appName, appVersion, maxProtocolVersion, platform, features },
  } = wallet;

  return (
    <List>
      {"imageUrl" in wallet && "aboutUrl" in wallet && (
        <>
          <Section>
            <Cell
              before={
                <Avatar
                  src={wallet.imageUrl}
                  alt="Provider logo"
                  width={60}
                  height={60}
                />
              }
              after={<Navigation>About wallet</Navigation>}
              subtitle={wallet.appName}
              onClick={(e) => {
                e.preventDefault();
                utils.openLink(wallet.aboutUrl as string);
              }}
            >
              <Title level="3">{wallet.name}</Title>
            </Cell>
          </Section>
          <TonConnectButton className={styles.button_connected} />
        </>
      )}
      <DisplayData
        header="Account"
        rows={[
          { title: "Address", value: address },
          { title: "Chain", value: chain },
          { title: "Public Key", value: publicKey },
        ]}
      />
      <DisplayData
        header="Device"
        rows={[
          { title: "App Name", value: appName },
          { title: "App Version", value: appVersion },
          { title: "Max Protocol Version", value: maxProtocolVersion },
          { title: "Platform", value: platform },
          {
            title: "Features",
            value: features
              .map((f) => (typeof f === "object" ? f.name : undefined))
              .filter((v) => v)
              .join(", "),
          },
        ]}
      />
    </List>
  );
};
