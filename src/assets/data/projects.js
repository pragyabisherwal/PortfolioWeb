import { v4 as uuidv4 } from 'uuid';
import blog from '../images/blog.jpg';
import cybersecurity from '../images/cybersecurity.jpg';
import education from '../images/edu.jpg';
import weather from '../images/weather.jpg';
import portfolio from '../images/portfolio.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Cyber Defender',
    desc:
      'A website for encrypting your data and providing efficient protection against data leakage.',
    img: cybersecurity,
  },
  {
    id: uuidv4(),
    name: 'ProjectShut',
    desc:
      'A website for assisting students developing their personal projects.Have courses on the same.',
    img: education,
  },
  {
    id: uuidv4(),
    name: 'WeatherForecaster',
    desc:
      'A website which forecasts weather using an open weather API and django in backend.',
    img: weather,
  },
  {
    id: uuidv4(),
    name: 'Pragya Portfolio',
    desc:
      'A portfolio website is the ultimate way to showcase your work and let others reach out for you.It is made using ReactJS',
    img: portfolio,
  },
  {
    id: uuidv4(),
    name: 'Blog Application',
    desc:
      'A Blog website developed using django to share personal experience and lessons to help peers.',
    img: blog,
  },
];

export default projects;
