import React from "react";
import DataTime from "./DataTime";
import IsMoment from "./IsMoment";

const VideoItem = (props) => {

    const withPrettyDateTime = (date) => (Component) => class extends React.Component {
        render() {
          const prettyDate = (typeof date === 'function') ? date(this.props.date) : date
          return <Component {...this.props} date={prettyDate}/>
        }
      };

    const DateTimePretty = withPrettyDateTime(IsMoment)(DataTime);
    return (
      <div className="video">
        <iframe
          src={props.url}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={'props.url'}
        ></iframe>
        <DateTimePretty date={props.date} />
      </div>
    );
  }
  export default VideoItem;
  