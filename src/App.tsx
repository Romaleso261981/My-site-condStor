import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Footer, Header, Hero, Top } from "./widgets";

function App() {
  return (
    <MantineProvider>
      <Top />
      <Header />
      <Hero />
      <Footer />
    </MantineProvider>
  );
}

export default App;
