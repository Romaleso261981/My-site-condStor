import { Button, Container, Flex, Title } from "@mantine/core";
import classes from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={classes.hero}>
      <Container className={classes.container} size="lg">
        <Flex className={classes.contentWrapper}>
          <Title className={classes.title}>
            Кондиціонери від виробника від 10999 грн
          </Title>
          <ul>
            <li>
              <img src="/src/assets/hero/list_check.svg" alt="svg" />
              <p className={classes.description}>Продаж</p>
            </li>
            <li>
              <img src="/src/assets/hero/list_check.svg" alt="svg" />
              <p className={classes.description}>Монтаж</p>
            </li>
            <li>
              <img src="/src/assets/hero/list_check.svg" alt="svg" />
              <p className={classes.description}>Доставка по всій</p>
            </li>
          </ul>
          <Button variant="gradient" size="lg" className={classes.control}>
            Замовити консультацію
          </Button>
        </Flex>
      </Container>
    </div>
  );
};
