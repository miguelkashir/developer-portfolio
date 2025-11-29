import { Header } from './comps/Header';
import {
  Briefcase,
  Code,
  GraduationCap,
  Globe,
  Layers,
  User,
} from 'lucide-react';

import {
  aboutData,
  educationData,
  experienceData,
  languagesData,
  projectsData,
  skillsData,
} from './data/data';
import { Section } from './comps/Section';
import { ExpEduCard } from './comps/ExpEduCard';
import { Paragraph } from './comps/Paragraph';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <Header />
      <div className="max-w-6xl flex flex-col justify-center align-center gap-4 mx-auto">
        <Section title={aboutData.title} icon={<User />}>
          <Paragraph>{aboutData.firstParagraph}</Paragraph>
          <Paragraph>{aboutData.secondParagraph}</Paragraph>
        </Section>

        <Section title={experienceData.title} icon={<Briefcase />}>
          <div>
            {experienceData.experiences.map((experience, index) => (
              <ExpEduCard
                key={index}
                logo={experience.logo}
                title={experience.role}
                subtitle={experience.company}
                description={experience.description}
                skills={experience.skills}
                startDate={experience.startDate}
                endDate={experience.endDate}
              />
            ))}
          </div>
        </Section>

        <Section title={educationData.title} icon={<GraduationCap />}>
          <div>
            {educationData.degrees.map((edu, index) => (
              <ExpEduCard
                key={index}
                logo={edu.logo}
                title={edu.degree}
                description={edu.description}
                subtitle={edu.institution}
                startDate={edu.startDate}
                endDate={edu.endDate}
              />
            ))}
          </div>
        </Section>

        <Section title={projectsData.title} icon={<Layers />}>
          {projectsData.projects.map((project, index) => (
            <div key={index}>
              <p className="font-semibold">{project.name}</p>
              <p>{project.description}</p>
              <p className="text-sm">{project.technologies}</p>
            </div>
          ))}
        </Section>

        <Section title={skillsData.title} icon={<Code />}>
          {skillsData.skills.map((skill, index) => (
            <div key={index}>
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </Section>

        <Section title={languagesData.title} icon={<Globe />}>
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
