import img1 from '../assets/imgs/img_esuccess.png';
import img3 from '../assets/imgs/wii.png';
import img2 from '../assets/imgs/minion.png';

export const dogs = [
  {nombre: 'Tokyo', edad: '3 meses', img: img1, genero: 'Masculino'},
  {nombre: 'Perla', edad: '5 meses', img: img2, genero: 'Masculino'},
  {nombre: 'Tommy', edad: '8 meses', img: img3, genero: 'Femenino'},
  {nombre: 'Lisboa', edad: '10 meses', img: img1, genero: 'Masculino'},
]

export const getDogs = () => dogs

export default {
  getDogs
}