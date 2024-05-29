import { Button, Group, Text } from "@mantine/core";
import s from "./Top.module.css";

export const Top = () => {
  return (
    <div>
      <div className={s.top}>
        <div className={s.top__content}>
          <Text className={s.top__description}>
            Установка, обслуговування, продаж кондиціонерів в Ладижині
          </Text>
          <Group>
            <Button>+38(068)947-87-23</Button>
            <Button>+38(068)947-87-23</Button>
          </Group>
        </div>
      </div>
    </div>
  );
};
