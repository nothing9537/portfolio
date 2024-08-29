import { FC } from 'react'

import { SectionWrapper } from '@/shared/layouts/section-layout'
import { Experiences } from '@/entities/experience'

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
    </SectionWrapper>
  )
}
