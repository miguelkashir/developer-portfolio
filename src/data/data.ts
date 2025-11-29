import geniallyLogo from '../assets/genially.jpg';
import corusLogo from '../assets/corus.jpg';
import glownetLogo from '../assets/glownet.jpg';
import justLandedLogo from '../assets/justlanded.jpg';
import ironhackLogo from '../assets/ironhack.jpg';
import trassierraLogo from '../assets/trassierra.jpg';

export const headerData = {
  name: 'Miguel Angel Alvarez',
  role: 'Senior Frontend Developer',
};

export const aboutData = {
  title: 'About',
  firstParagraph: `I'm the kind of person who loves solving problems through creative, detail-focused solutions. I approach each project with care and precision, always striving to make a positive impact.`,
  secondParagraph:
    'Apart from programming, I enjoy a wide range of interests— Exploring new places, motorsports, gym,music, good coffee and gaming.',
};

export interface Experience {
  company: string;
  logo?: string;
  location: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  skills: string[];
}

interface experienceDataProps {
  title: string;
  experiences: Experience[];
}

export const experienceData: experienceDataProps = {
  title: 'Experience',
  experiences: [
    {
      company: 'Genially',
      logo: geniallyLogo,
      location: '',
      role: 'Senior Frontend Developer',
      startDate: new Date('2020-03-01'),
      endDate: null,
      description:
        'I work as a Senior Frontend Developer in a product company that builds an interactive content creation platform. After six years rotating through multiple squads, I’ve gained a deep, end-to-end understanding of the application. I collaborate closely with product managers, designers and backend engineers to deliver scalable, polished features, often through pair programming. I take ownership of complex tasks, contribute to architectural decisions, and ensure consistency through a refined Design System. Our work is guided by a strong event-tracking system that helps measure feature impact and continuously improve the user experience.',
      skills: [
        'React',
        'TypeScript',
        'MobX',
        'Styled Components',
        'Cypress',
        'React Testing Library',
        'Storybook',
        'Snowplow',
        'ClickUp',
        'Git',
        'SCRUM',
      ],
    },
    {
      company: 'Corus Consulting',
      logo: corusLogo,
      location: 'Madrid, Spain',
      role: 'Full Stack Developer',
      startDate: new Date('2018-07-01'),
      endDate: new Date('2020-03-01'),
      description:
        'Worked in a small, agile team delivering solutions for clients across different industries. While contributing to full-stack development, I began to focus more on the frontend and gradually took responsibility for that area, shaping user interfaces and improving overall usability. Collaborated closely with clients to refine requirements and ensure timely, high-quality deliveries across multiple parallel projects.',
      skills: [
        'React',
        'Vue',
        'Node',
        'JavaScript',
        'Jest',
        'Mocha',
        'Cypress',
        'MongoDB',
        'SCSS',
        'Git',
        'SCRUM',
      ],
    },
    {
      company: 'Glownet',
      logo: glownetLogo,
      location: '',
      role: 'Full Stack Developer',
      startDate: new Date('2017-06-01'),
      endDate: new Date('2018-06-01'),
      description:
        'I contributed to a cashless payment system used across major music festivals, developing features for NFC wristband transactions, ticketing and real-time dashboards. During this period, I strengthened my full-stack foundations and gained valuable soft skills by working directly with clients and festival staff during live events. I supported high-demand operations on-site, ensuring smooth performance and resolving issues under pressure.',
      skills: [
        'Ruby on Rails',
        'jQuery',
        'RSpec',
        'Selenium',
        'PostgreSQL',
        'Slim',
        'SCSS',
        'Git',
        'SCRUM',
        'JIRA',
      ],
    },
    {
      company: 'Just Landed',
      logo: justLandedLogo,
      location: 'Madrid, Spain',
      role: 'Full Stack Developer',
      startDate: new Date('2017-01-01'),
      endDate: new Date('2017-06-01'),
      description:
        'I worked as a Full Stack Developer on a global classifieds and information platform operating in nearly 70 countries and 12 languages. This role helped me build a solid foundation in MVC architectures, Linux environments and full-stack development practices. I contributed to features across multiple modules, improved reliability in high-traffic areas and collaborated with cross-functional teams to deliver consistent, user-focused experiences for an international audience.',
      skills: [
        'Ruby on Rails',
        'jQuery',
        'RSpec',
        'Selenium',
        'PostgreSQL',
        'Slim',
        'SCSS',
        'Git',
        'Redmine',
      ],
    },
  ],
};

export const educationData = {
  title: 'Education',
  degrees: [
    {
      logo: ironhackLogo,
      degree: 'Web Development Bootcamp',
      institution: 'Ironhack',
      startDate: new Date('2016-10-01'),
      endDate: new Date('2016-12-01'),
      description: 'Focused on software development and web technologies.',
    },
    {
      logo: trassierraLogo,
      degree:
        'Certificate of Higher Education (HNC), Computer Software Engineering',
      institution: 'IES Trassierra',
      startDate: new Date('2013-09-01'),
      endDate: new Date('2015-06-01'),
      description: 'Focused on software development and web technologies.',
    },
  ],
};

export const projectsData = {
  title: 'Projects',
  projects: [
    {
      name: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my work and skills.',
      technologies: ['React', 'TypeScript', 'CSS'],
      link: 'https://example.com/portfolio',
    },
    {
      name: 'E-commerce Platform',
      description: 'An online store built with React and Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://example.com/ecommerce',
    },
  ],
};

export const skillsData = {
  title: 'Skills',
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'MobX',
    'HTML',
    'CSS',
    'Cypress',
    'Styled Components',
  ],
};

export const languagesData = {
  title: 'Languages',
  languages: [
    {
      language: 'English',
      proficiency: 'Fluent',
    },
    {
      language: 'Spanish',
      proficiency: 'Native',
    },
  ],
};
