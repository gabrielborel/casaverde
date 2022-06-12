import { Container } from './styles';
import Blob from '../../assets/Blob.svg';
import { HiOutlineMail } from 'react-icons/hi';
import HeroImage from '../../assets/HeroImage.png';

export const Newsletter = () => {
  return (
    <Container>
      <img src={Blob} alt='Blob' />

      <div>
        <p>Sua casa com as</p>
        <strong>
          melhores <br /> plantas
        </strong>
        <p className='text'>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia
          a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>

        <div>
          <HiOutlineMail className='icon' />
          <input type='email' placeholder='Insira seu e-mail' />
          <button>Assinar newsletter</button>
        </div>
      </div>

      <img src={HeroImage} alt='Tree' className='hero' />
    </Container>
  );
};
