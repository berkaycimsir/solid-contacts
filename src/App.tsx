import { Container } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import Header from './components/Header';

const App: Component = () => {
  return (
    <Container centered maxW="$containerLg">
      <Header />
    </Container>
  );
};

export default App;
