import geniallyLogo from '../assets/geniallyLogo.jpg';

export const headerData = {
  name: 'Miguel A. Alvarez',
  role: 'Senior Frontend Developer',
};

export const aboutData = {
  title: 'About',
  firstParagraph: `I'm the kind of person who loves solving problems through creative, detail-focused solutions. I approach each project with care and precision, always striving to make a positive impact.`,
  secondParagraph:
    'Apart from programming, I enjoy a wide range of interests— Exploring new places, motorsports, gym,music, good coffee and gaming.',
  thirdParagraph:
    'Specialties: React, MobX, TypeScript & JavaScript, Styled Components, Cypress, HTML & CSS.',
};

interface Experience {
  title: string;
  company: string;
  logo: string;
  location: string;
  role: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

interface experienceDataProps {
  title: string;
  experiences: Experience[];
}

export const experienceData: experienceDataProps = {
  title: 'Experience',
  experiences: [
    {
      title: 'Senior Frontend Developer',
      company: 'Genially',
      logo: geniallyLogo,
      location: '',
      role: 'Senior Frontend Developer',
      startDate: new Date('2020-03-01'),
      endDate: null,
      description: '',
    },
  ],
};

export const educationData = {
  title: 'Education',
  degrees: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      startDate: new Date('2015-09-01'),
      endDate: new Date('2019-06-01'),
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
