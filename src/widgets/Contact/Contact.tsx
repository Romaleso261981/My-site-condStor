import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram
} from "@tabler/icons-react";
import classes from "./ContactUs.module.css";
import { ContactIconsList } from "./ui/ContactIcons";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export const ContactUs = () => {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Наші контакти</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Залиште своє повідомлення ми вам зателефонуємо
          </Text>
          <ContactIconsList />
          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Пошта"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Ім'я"
            placeholder="Петро"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Ваше повідомлення"
            placeholder="Мені потрібна консуьтація"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Замовити консультацію</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
};
