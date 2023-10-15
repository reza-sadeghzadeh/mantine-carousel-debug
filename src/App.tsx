import { Carousel } from "@mantine/carousel";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import "@mantine/carousel/styles.css";

function Demo() {
  return (
    <Carousel withIndicators height={200} draggable={false}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}

export default function App() {
  return (
    <div className="App">
      <MantineProvider>
        <h1>Test</h1>
        <Demo />
      </MantineProvider>
    </div>
  );
}
