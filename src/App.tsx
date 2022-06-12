import styled from 'styled-components';
import { Menu } from './components/Menu';

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
      Hello World
    </Container>
  );
}

export default App;
