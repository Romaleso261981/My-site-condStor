import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider, Title } from "@mantine/core";
import { Footer, Header } from "./widgets";
import { Top } from "./widgets/Top/Top";

function App() {
  return (
    <MantineProvider>
      <Top />
      <Header />
      <Title>Helo World</Title>
      <Footer />
    </MantineProvider>
  );
}

export default App;
