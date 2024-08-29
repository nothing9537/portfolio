import { FC } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { ExperienceCard, ExperienceItem } from '@/entities/experience';

import "react-vertical-timeline-component/style.min.css";

interface VerticalTimeLineProps {
  items: ExperienceItem[];
}

const VerticalTimelineIcon: FC<{ src: string, alt: string }> = ({ src, alt }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img src={src} alt={alt} className="w-[60%] h-[60%] object-contain" />
    </div>
  );
};

export const VerticalTimeLine: FC<VerticalTimeLineProps> = ({ items }) => {
  const renderExperienceCard = (item: ExperienceItem, index: number) => (
    <VerticalTimelineElement
      key={index + item.date}
      date={item.date}
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: "8px solid #232631" }}
      iconStyle={{ background: item.iconBg?.toString() }}
      icon={<VerticalTimelineIcon src={item.icon} alt={item.company} />}
    >
      <ExperienceCard item={item} />
    </VerticalTimelineElement>
  );

  return (
    <VerticalTimeline>
      {items.map(renderExperienceCard)}
    </VerticalTimeline>
  );
};
