import  VideoItem from './VideoItem'

const VideoList = ({ list }) => {
    return (
        list.map((item) => <VideoItem key={item.url} url={item.url} date={item.date} />)
    )
}
export default VideoList;
