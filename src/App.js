import VideoList from "./components/Videolist";
import { data } from "./data/data";
import "./App.css"


const App = () => {

    return <VideoList list={data} />;
}
export default App;
