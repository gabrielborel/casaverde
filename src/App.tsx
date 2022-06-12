import styled from 'styled-components';
import { Details } from './components/Details';
import { Menu } from './components/Menu';
import { Newsletter } from './components/Newsletter';

const Container = styled.div`
  width: 100%;
  max-width: 62%;
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Newsletter />
      <Details />
    </Container>
  );
}

export default App;
