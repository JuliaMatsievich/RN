import { SlideHelloScreen } from 'types/slydes.types.ts';
import Screen1 from 'assets/images/helloscreen-1.svg';
import Screen2 from 'assets/images/helloscreen-2.svg';
import Screen3 from 'assets/images/helloscreen-3.svg';

export const helloSlidesData: SlideHelloScreen[] = [
  {
    imageSrc: Screen1,
    title: 'Добро Пожаловать!',
    text: 'Мы поможем вам эффективно и легко записываться на прием к врачам.\n Давайте начнем!',
  },
  {
    imageSrc: Screen2,
    title: 'Выберите Специализацию',
    text:
      'Выберите нужную вам медицинскую специализацию, чтобы мы могли\n' +
      'адаптировать ваш опыт.',
  },
  {
    imageSrc: Screen3,
    title: 'Запланируйте Свой Первый Прием',
    text: 'Выберите удобное время и дату для\n встречи с желаемым врачом.\n Начните свой путь к лучшему здоровью!',
  },
];
