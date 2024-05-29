import { Container } from "@mantine/core";
import classes from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={classes.hero}>
      <Container className={classes.container} size="lg">
        {/* <Title className={classes.title}>
          A fully featured React components library
        </Title> */}
        {/* <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text> */}

        {/* <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Get started
        </Button> */}
      </Container>
    </div>
  );
};
