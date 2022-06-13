import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { Details } from './components/Details';
import { Menu } from './components/Menu';
import { Newsletter } from './components/Newsletter';
import { Offers } from './components/Offers';

const Container = styled.div`
  width: 100%;
  max-width: 65%;
  margin: 0 auto;
  height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Toaster />

      <Menu />
      <Newsletter />
      <Details />
      <Offers />
    </Container>
  );
}
