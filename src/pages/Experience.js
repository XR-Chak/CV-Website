import { School } from '@mui/icons-material';
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

function Experience() {
  console.log("hello");
  return (
    <div>
      Experience
      <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
          <VerticalTimelineElement className='vertical-timeline-element--education'
          date='2018 -2022'
          iconStyle={{background: "#3e497a", color:"fff"}}
          icon={<School/>}
          >
            <h3 className='vertical-timeline-element-title'>
              
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience