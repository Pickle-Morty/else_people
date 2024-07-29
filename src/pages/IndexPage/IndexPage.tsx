import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { Link } from "@/components/Link/Link.tsx";
import tonSvg from "./ton.svg";
import i18nPng from "./i18next.png";
import typeailwindPng from "./Tailwind.png";

export const IndexPage: FC = () => {
  return (
    <List>
      <Section
        header="Было реализованно:"
        footer="Ознакомтесь с внедренными решениями!"
      >
        <Link to="/ton-connect">
          <Cell
            before={
              <Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />
            }
            subtitle="Подключите свой TON-кошелек"
          >
            TON Connect
          </Cell>
        </Link>
        <Link to="/experts">
          <Cell
            before={
              <Image
                src={typeailwindPng}
                style={{ backgroundColor: "#007AFF" }}
              />
            }
            subtitle="Страница построенная на Tailwind UI"
          >
            Tailwind
          </Cell>
        </Link>
        <Link to="/language">
          <Cell
            before={
              <Image src={i18nPng} style={{ backgroundColor: "#007AFF" }} />
            }
            subtitle="Локализация приложения"
          >
            i18next
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
