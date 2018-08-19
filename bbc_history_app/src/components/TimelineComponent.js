import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimelineComponent = (props) => {
    return(
      <VList VListData = {props.events}/>
    )
  }


const VList = (props) =>  {

    const allEvents = props.VListData.map((event, index) => {
      return (
        <VLElement key={index} VLElementData={event}/>
      )
    });

    return(
      <div>
        <VerticalTimeline>
          {allEvents}
        </VerticalTimeline>
      </div>
    )
  }


const VLElement = (props) =>  {

    var positionDir = "left";
    if(parseInt(props.VLElementData["year"], 10) % 2) {
      positionDir = "right";
    }

    return(
      <div>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date= {props.VLElementData["year"]}
          iconStyle={{ background: 'orange', color: '#fff' }}
          position={positionDir}>

          <h3 className="vertical-timeline-element-title">{props.VLElementData["text"]}</h3>
          <h4 className="vertical-timeline-element-subtitle"><a href={props.VLElementData["links"][0]["link"]}>More info</a></h4>

        </VerticalTimelineElement>

      </div>

    )
}


export default TimelineComponent;
