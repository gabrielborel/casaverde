import { Container } from './styles';
import Planta from '../../assets/Planta.svg';
import Seta from '../../assets/seta.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Offers = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    const response = await axios.get(
      'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw'
    );

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <Container>
      <div>
        <p>Conheça nossas</p>
        <strong>ofertas</strong>
      </div>

      <div className='card-list'>
        <div className='card'>
          <img src={Planta} alt='Planta' />

          <div>
            <strong>Ajuga Reptans</strong>
            <p>R$ 20,00</p>

            <button>
              Comprar <img src={Seta} alt='seta' />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src={Planta} alt='Planta' />

          <div>
            <strong>Ajuga Reptans</strong>
            <p>R$ 20,00</p>

            <button>
              Comprar <img src={Seta} alt='seta' />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src={Planta} alt='Planta' />

          <div>
            <strong>Ajuga Reptans</strong>
            <p>R$ 20,00</p>

            <button>
              Comprar <img src={Seta} alt='seta' />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src={Planta} alt='Planta' />

          <div>
            <strong>Ajuga Reptans</strong>
            <p>R$ 20,00</p>

            <button>
              Comprar <img src={Seta} alt='seta' />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src={Planta} alt='Planta' />

          <div>
            <strong>Ajuga Reptans</strong>
            <p>R$ 20,00</p>

            <button>
              Comprar <img src={Seta} alt='seta' />
            </button>
          </div>
        </div>

        <div className='card'>
          <img src={Planta} alt='Planta' />

          <div>
            <strong>Ajuga Reptans</strong>
            <p>R$ 20,00</p>

            <button>
              Comprar <img src={Seta} alt='seta' />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
