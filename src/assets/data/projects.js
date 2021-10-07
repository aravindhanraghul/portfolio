import { v4 as uuidv4 } from 'uuid';
import oxerp from '../pdf/ets.png';
import ets from '../pdf/oxerp.png';

const projects = [
  {
    id: uuidv4(),
    name: 'OX-ERP 2.O',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: oxerp,
  },
  {
    id: uuidv4(),
    name: 'E-Trucking Soft',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: ets,
  },
];

export default projects;
