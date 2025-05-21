import "./App.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import image from "./assets/c.png";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  return (
    <>
      <div className="container">
        <div className="top">
          <div className="gr">
            <div>
              <FaArrowLeft />
            </div>

            <div className="fa">v</div>

            <div className="hi">
              <div>Vivek Kumar</div>
              <div className="r">ID:v39278233@okhdfcbank</div>
            </div>
          </div>

          <div className="hr">
            <CiMenuKebab />
          </div>
        </div>
        <div className="timing">
          <div></div>
          <div className="ty">2:30 pm</div>
          <div></div>
        </div>
        <div className="bubble">
          <div className="gt">
            <div className="gtr">Payment to Vivek</div>
            <h1>₹500</h1>
          </div>

          <div className="gy">
            <div className="ki">
              <div className="n ">
                <IoCheckmarkDoneCircleOutline />
              </div>
              <div className="max ra">Paid 2:30 pm</div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>

          {/* <img src={image} alt="" /> */}
        </div>

        <div className="bubble wa">
          <div className="gt">
            <div className="gtr">You earned a scratch card!</div>
            <div className="parent">
              <div className="gray">
                <div className="blue"></div>
              </div>
            </div>
          </div>

          <div className="gy">
            <div className="ki">
              {/* <div className="n ">
                <IoCheckmarkDoneCircleOutline />
              </div> */}
              <div className="max ra">Tap to view</div>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>

          {/* <img src={image} alt="" /> */}
        </div>

        <div className="last">
          <div className="p o">Pay</div>
          <div className="y o">Request</div>
          {/* <img src={image} alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default App;
