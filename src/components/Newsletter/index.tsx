import { FormEvent, useRef, useState } from 'react';
import { Container } from './styles';
import Blob from '../../assets/Blob.svg';
import { HiOutlineMail } from 'react-icons/hi';
import HeroImage from '../../assets/HeroImage.png';
import toast from 'react-hot-toast';
import { sendMail } from '../../services/mailService';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const form = useRef();

  const submitEmailToNewsletter = (e: FormEvent) => {
    e.preventDefault();

    toast.success(`Obrigado pela sua assinatura!\n\nVocê receberá novidades no e-mail: ${email}`, {
      duration: 4000,
      style: {
        textAlign: 'center',
      },
    });

    sendMail(e);
  };

  return (
    <Container>
      <img src={Blob} alt='Blob' />

      <div>
        <p>Sua casa com as</p>
        <strong>
          melhores <br /> plantas
        </strong>
        <p className='text'>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa
          mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das
          novidades da marca.
        </p>

        <form onSubmit={submitEmailToNewsletter}>
          <HiOutlineMail className='icon' />
          <input
            type='email'
            placeholder='Insira seu e-mail'
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button type='submit'>Assinar newsletter</button>
        </form>
      </div>

      <img src={HeroImage} alt='Tree' className='hero' />
    </Container>
  );
};
