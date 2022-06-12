import { Container } from './styles';
import Image from '../../assets/DetailImage.svg';
import Ellipse from '../../assets/Ellipse.svg';

export const Details = () => {
  return (
    <Container>
      <img src={Image} alt='' />
      <div>
        <p>Como conseguir</p>
        <strong>minha planta</strong>

        <div>
          <img src={Ellipse} alt='' />
          <p>Escolha suas plantas</p>
        </div>
        <div>
          <img src={Ellipse} alt='' />
          <p>Faça seu pedido</p>
        </div>
        <div>
          <img src={Ellipse} alt='' />
          <p>Aguarde na sua casa</p>
        </div>
      </div>
    </Container>
  );
};
