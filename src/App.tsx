import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Header, Top } from "./widgets";

function App() {
  return (
    <MantineProvider>
      <Top />
      <Header />
      {/* <Hero /> */}
      {/* <Footer /> */}
    </MantineProvider>
  );
}

export default App;
