
import './App.css';
import Proj_card from "./Proj_card"
import image1 from "./images/notemaking card_image.jpg"
import image2 from "./images/char_count_project_pic.jpg"


function App() {
  return <>
    <div className="headingPage">
    <h1 className="pageHeading"> Project Ground</h1>

      <div className="container">
        {/* First Project details */}
        <Proj_card pTitle="Note Making"
          pLink="https://p4k5uaqdxalpzahfnx7j7g-on.drv.tw/todolist/OnlineNote.html"
          pImage={image1} />
        {/* Second Project details */}
        <Proj_card pTitle="Char Count"
          pLink="https://p4k5uaqdxalpzahfnx7j7g-on.drv.tw/CharCount/CharCount.html"
          pImage={image2} />
      </div>
    </div>
  </>;
}

export default App;
