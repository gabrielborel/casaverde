import { Container } from './styles';
import Planta from '../../assets/Planta.svg';
import Seta from '../../assets/seta.svg';

export const Offers = () => {
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
