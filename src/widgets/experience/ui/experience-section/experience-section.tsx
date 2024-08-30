import { FC } from 'react'

import { Experiences } from '@/entities/experience'
import { SectionWrapper } from '@/shared/layouts/section-layout'
import { SectionSwitch } from '@/shared/ui/section-switch'

import { VerticalTimeLine } from '../vertical-timeline/vertical-timeline'

export const Experience: FC = () => {
  return (
    <SectionWrapper
      title='What I have done so far'
      subTitle="Work Experience."
      sectionId="work"
      classNames={{
        titleClassName: "text-center",
        subTitleClassName: "text-center"
      }}
    >
      <VerticalTimeLine items={Experiences} />
      <SectionSwitch toSection="skills" className="mt-16" />
    </SectionWrapper>
  )
}