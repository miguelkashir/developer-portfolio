import { useEffect, useState } from 'react';
import { Header } from './comps/Header';

import {
  aboutData,
  educationData,
  experienceData,
  languagesData,
  projectsData,
  skillsData,
} from './data/data';
import { Section } from './comps/Section';

const SCROLL_TRIGGER = 50;

export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_TRIGGER);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased p-8">
      <div className="max-w-6xl flex flex-col justify-center align-center gap-4 mx-auto">
        <Header isScrolled={isScrolled} />

        <Section title={aboutData.title}>
          <p>{aboutData.firstParagraph}</p>
          <p>{aboutData.secondParagraph}</p>
          <p>{aboutData.thirdParagraph}</p>
        </Section>

        <Section title={experienceData.title}>
          {experienceData.experiences.map(
            (
              {
                title,
                company,
                location,
                role,
                startDate,
                endDate,
                description,
                logo,
              },
              index
            ) => (
              <div key={index}>
                <img src={logo} alt={company} />
                <p>{title}</p>
                <p>{company}</p>
                <p>{location}</p>
                <p>{role}</p>
                <p>
                  {startDate.toString()} - {endDate?.toString()}
                </p>
                <p>{description}</p>
              </div>
            )
          )}
        </Section>

        <Section title="Education">
          {educationData.degrees.map((edu, index) => (
            <div key={index}>
              <p className="font-semibold">{edu.institution}</p>
              <p>{edu.degree}</p>
              <p className="text-sm text-gray-600">
                {edu.startDate.toString()} - {edu.endDate.toString()}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Projects">
          {projectsData.projects.map((project, index) => (
            <div key={index}>
              <p className="font-semibold">{project.name}</p>
              <p>{project.description}</p>
              <p className="text-sm">{project.technologies}</p>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          {skillsData.skills.map((skill, index) => (
            <div key={index}>
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </Section>

        <Section title="Languages">
          {languagesData.languages.map((lang, index) => (
            <div key={index}>
              <p className="font-semibold">{lang.language}</p>
              <p className="text-sm">{lang.proficiency}</p>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
};
