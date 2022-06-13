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

        {['Escolha suas plantas', 'Faça seu pedido', 'Aguarde na sua casa'].map((text, index) => (
          <div key={index}>
            <img src={Ellipse} alt='' />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
