import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Loading Game',
    desc:
      'Fictional website created to show data from RAWG API using React, Redux, Node, and Sequelize.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc:
      'Application whose objective is to find the current climate of any country in the world. Developed with JavaScript using React',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Changas Project',
    desc:
      'Website created to offer job services. Have searchbar, filtered by category, geolocation map, reviews, questions and others.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'My Own Portfolio',
    desc:
      'Development of my own portfolio using ReactJs. Designed with desktoop and responsive view',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Coming Soon...',
    desc: 'Project in progress',
    img: ProjectImg,
  },
];

export default projects;
