import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Footer, Header, Hero, Top } from "./widgets";
import { ContactUs } from "./widgets/Contact";

function App() {
  return (
    <MantineProvider>
      <Top />
      <Header />
      <Hero />
      <ContactUs />
      <Footer />
    </MantineProvider>
  );
}

export default App;
