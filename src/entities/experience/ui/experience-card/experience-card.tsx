import { FC } from 'react'

import { ExperienceItem } from '../../model/types/experience';

interface ExperienceCardProps {
  item: ExperienceItem;
}

const SocialLink: FC<{ href: string, text: string }> = ({ href, text }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='text-white-100 text-[14px] font-semibold underline mt-4 block w-fit'
    >
      {text}
    </a>
  );
};

const renderPoint = (point: string, index: number) => (
  <li
    key={`experience-point-${index}`}
    className='text-white-100 text-[14px] pl-1 tracking-wider'
  >
    {point}
  </li>
);

const renderSkill = (skill: string, index: number) => (
  <li
    key={`experience-point-${index}`}
    className='text-white-100 text-[14px] h-fit w-fit'
  >
    {skill}
  </li>
);

export const ExperienceCard: FC<ExperienceCardProps> = ({ item }) => {
  return (
    <div className="shadow-card">
      <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
      <p className='text-secondary text-[16px] font-semibold m-0'>
        {item.company}
      </p>
      <ul className='mt-4 list-disc ml-4 space-y-2'>
        {item.points.map(renderPoint)}
      </ul>
      {item.skills && (
        <>
          <p>Skills:</p>
          <ul className='mt-4 flex gap-2 flex-wrap items-center justify-start space-x-4 list-disc ml-4'>
            {item.skills.map(renderSkill)}
          </ul>
        </>
      )}
      {item.githubUrl && (
        <SocialLink href={item.githubUrl} text="GitHub" />
      )}
      {item.applicationUrl && (
        <SocialLink href={item.applicationUrl} text="Application" />
      )}
    </div>
  );
};
