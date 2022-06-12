import { Container } from './styles';
import Logo from '../../assets/Logo.svg';

export const Menu = () => {
  return (
    <Container>
      <img src={Logo} alt='Logo Casa Verde' />

      <div>
        <a href='#'>Como fazer</a>/<a href='#'>Ofertas</a>/<a href='#'>Depoimentos</a>/<a href='#'>Vídeos</a>/
        <a href='#'>Meu Carrinho</a>
      </div>
    </Container>
  );
};
