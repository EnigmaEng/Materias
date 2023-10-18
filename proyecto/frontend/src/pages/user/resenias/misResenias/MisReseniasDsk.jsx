import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import FooterDsk from '../../../../components/Footer/FooterDsk'
import {MdOutlineRateReview} from 'react-icons/md'
const people = [
  {
    restaurante: 'Annie Restaurant',
    cocina: '8',
    imageUrl:
      'https://images.vexels.com/media/users/3/334657/raw/efc6f41803c9f536f6752a04c49d6805-disea-o-de-logotipo-de-restaurante-tema-tico-de-pizza.jpg',
  },
    {
    restaurante: 'Jose pastas',
    cocina: '8',
    imageUrl:
      'https://images.vexels.com/media/users/3/334657/raw/efc6f41803c9f536f6752a04c49d6805-disea-o-de-logotipo-de-restaurante-tema-tico-de-pizza.jpg',
  },
    {
    restaurante: 'Manolito',
    cocina: '8',
    imageUrl:
      'https://images.vexels.com/media/users/3/334657/raw/efc6f41803c9f536f6752a04c49d6805-disea-o-de-logotipo-de-restaurante-tema-tico-de-pizza.jpg',
  },
    {
    restaurante: 'Alvaro Restaurant',
    cocina: '8',
    imageUrl:
      'https://images.vexels.com/media/users/3/334657/raw/efc6f41803c9f536f6752a04c49d6805-disea-o-de-logotipo-de-restaurante-tema-tico-de-pizza.jpg',
  },
    {
    restaurante: 'Don jaime',
    cocina: '8',
    imageUrl:
      'https://images.vexels.com/media/users/3/334657/raw/efc6f41803c9f536f6752a04c49d6805-disea-o-de-logotipo-de-restaurante-tema-tico-de-pizza.jpg',
  },
    {
    restaurante: 'Lo de Juan',
    cocina: '8',
    imageUrl:
      'https://images.vexels.com/media/users/3/334657/raw/efc6f41803c9f536f6752a04c49d6805-disea-o-de-logotipo-de-restaurante-tema-tico-de-pizza.jpg',
  },
  
]

const MisReseniasDsk = () => {
  return (
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 '>

      <NavBar/>
    <div className="bg-white w-[60%] mt-28 rounded-box shadow-xl m-auto py-24 sm:py-32 mb-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl bg-zinc-100  h-48 p-2 rounded-box shadow-xl  xl:h-80">
          <h2 className="text-3xl font-bold tracking-tight text-black font-aref sm:text-3xl px-5 py-2 flex gap-5 ">Tus reseñas <span className='text-4xl mt-1'><MdOutlineRateReview/></span></h2>
          <p className="mt-6 text-lg leading-8 text-black ">
            Este es el lugar donde veras tus reseñas creadas hacia otros restaurantes concurridos
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((item) => (
            <li key={item.restaurante}>
              <div className="flex items-center gap-x-6 border shadow-xl p-2 rounded-box">
                <img className="h-16 w-16 rounded-full" src={item.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-wwe">{item.restaurante}</h3>
                  <p className="text-sm font-semibold leading-6 text-black">Menu gastronómico: {item.cocina}</p>
                   <p className="text-sm font-semibold leading-6 text-black">Personal: {item.cocina}</p>
                    <p className="text-sm font-semibold leading-6 text-black">Instalaciones: {item.cocina}</p>
                    <p className="text-sm font-semibold leading-6 text-black">General: {item.cocina}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <FooterDsk/>
    </div>
  )
}

export default MisReseniasDsk