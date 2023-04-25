import './App.css'

import { AiOutlineSound } from "@react-icons/all-files/ai/AiOutlineSound";
import { BsArrowRepeat } from "@react-icons/all-files/bs/BsArrowRepeat";
import { BsShuffle } from "@react-icons/all-files/bs/BsShuffle";
import beat1 from "./assets/images/beat1.jpg"
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { IoMdArrowDropleft } from "@react-icons/all-files/io/IoMdArrowDropleft";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { CgArrowLeftO } from "@react-icons/all-files/cg/CgArrowLeftO";
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { AiOutlinePause } from "@react-icons/all-files/ai/AiOutlinePause";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

function App() {

  return (
    <div className="root">
      <h1>Music Player</h1>
      <main className="app">
        <div className="content">
          <div className="handling">
            <div className="handling-sound" title="Volume">
              <AiOutlineSound className="icon-sound"/>
              <div className="volume">
                <input min="0"
                       min="1"
                       step="0.1"
                       type="range"
                       value="0.5"
                       name="volume"
                       className="controls"/>
              </div>
            </div>
            <div className="handling-repeat" title="Repeat">
              <BsArrowRepeat className="icon-repeat"/>
            </div>
            <div className="handling-shuffle" title="Shuffle">
              <BsShuffle className="icon-shuffle"/>
            </div>
          </div>
          <div className="current">
            <div className="current-image" style={{backgroundImage: `url("${beat1}")`}}>
            </div>
            <div className="current-info">
              <div className="current-info__top">
                <div className="current-info__titles">
                  <h2 className="current-info__group">NF</h2>
                  <h3 className="current-info__track">The search</h3>
                </div>
                <div className="current-info__year">2023</div>
              </div>
              <div className="controls">
                <div className="controls-buttons">
                  <button className="controls-button controls-prev">
                    <MdKeyboardArrowLeft className="icon-arrow"/>
                  </button>
                  <button className="controls-button controls-play">
                    <AiOutlinePause className="icon-pause"/>
                    <IoMdArrowDropright className="icon-play"/>
                  </button>
                  <button className="controls-button controls-next">
                    <MdKeyboardArrowLeft className="icon-arrow"/>
                  </button>
                </div>
                <div className="controls-progress">
                  <div className="progress">
                    <div className="progress-current" style={{width: 200}}></div>
                  </div>
                  <div className="timeline">
                    <span className="timeline-start">00:25</span>
                    <span className="timeline-end">00:25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list">
            <p className="list-title">All tracks</p>
            <div className="items">
              <div className="item">
                <div className="item-image" style={{backgroundImage: `url("${beat1}")`}}>
                </div>
                <div className="item-titles">
                  <h2 className="item-group">Blink-182</h2>
                  <h3 className="item-track">Love</h3>
                </div>
                <p className="item-duration">03:50</p>
                <p className="item-genre">Rock</p>
                <button className="item-play">
                  <IoMdArrowDropright className="icon-play"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
