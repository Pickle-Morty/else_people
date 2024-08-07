import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { Link } from "@/UI/Link/Link";
import tonSvg from "@/assets/icons/ton.svg";
import i18nPng from "@/assets/icons/i18next.png";

export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header="Было реализовано:"
        footer="Ознакомьтесь с внедренными решениями!"
      >
        <Link to="/ton-connect">
          <Cell
            before={<Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />}
            subtitle="Подключите свой TON-кошелек"
          >
            TON Connect
          </Cell>
        </Link>
        <Link to="/language">
          <Cell
            before={<Image src={i18nPng} style={{ backgroundColor: "#007AFF" }} />}
            subtitle="Локализация приложения"
          >
            i18next
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
