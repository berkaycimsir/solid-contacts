import { Container } from '@hope-ui/solid';
import { Route, Routes } from '@solidjs/router';
import { Component } from 'solid-js';
import Breadcrumbs from './components/Breadcrumbs';
import Header from './components/Header';

import AddedContacts from './pages/AddedContacts';
import BlockedContacts from './pages/BlockedContacts';
import Home from './pages/Home';

const App: Component = () => {
  return (
    <Container p="$6" centered maxW="$containerXl">
      <Header />

      <Breadcrumbs />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/added-contacts" component={AddedContacts} />
        <Route path="/blocked-contacts" component={BlockedContacts} />
      </Routes>
    </Container>
  );
};

export default App;
