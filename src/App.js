
import './App.css';
import Register from "./Components/Register/Register";
import LeftBar from "./Components/Left_Bar/LeftBar";
import Publish_Preview from "./Components/Publish_Preview/Publish_Preview";
import Profile from "./Components/Profile/Profile";
import Favorites from "./Components/Favorites/Favorites";
import NewPost from "./Components/Posts/NewPost";

function App() {
  return (
    <div className="App">
        <LeftBar/>
        <NewPost/>
    </div>
  );
}

export default App;
