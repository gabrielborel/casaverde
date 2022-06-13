import { FormEvent, useState } from 'react';
import { Container } from './styles';
import Blob from '../../assets/Blob.svg';
import { HiOutlineMail } from 'react-icons/hi';
import HeroImage from '../../assets/HeroImage.png';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmitEmailToNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast.loading('Carregando ...', {
      id: 'mail',
    });

    emailjs
      .sendForm(
        'gmail',
        'template_hmdrkqj',
        e.currentTarget as HTMLFormElement,
        'zCACRpVEMbAgjZM5i'
      )
      .then((result) => {
        setTimeout(() => {
          toast.success(
            `Obrigado pela sua assinatura!\n\nVocê receberá novidades no e-mail: ${email}`,
            {
              id: 'mail',
              duration: 4000,
              style: {
                textAlign: 'center',
              },
            }
          );

          console.log(result.text);
          setEmail('');
        }, 1000);
      })
      .catch((err) => {
        setTimeout(() => {
          console.log(err);
          toast.error(`Error ${err.status}`, {
            id: 'mail',
          });
        }, 1500);
      });
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

        <form onSubmit={handleSubmitEmailToNewsletter}>
          <HiOutlineMail className='icon' />
          <input
            type='email'
            placeholder='Insira seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button type='submit'>Assinar newsletter</button>
        </form>
      </div>

      <img src={HeroImage} alt='Tree' className='hero' />
    </Container>
  );
};
