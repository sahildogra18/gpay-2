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

            <div className="fa">s</div>

            <div className="hi">
              <div>SUDHANSHU DOGRA</div>
              <div className="r">UPI ID:75089394@axisb</div>
            </div>
          </div>

          <div className="hr">
            <CiMenuKebab />
          </div>
        </div>
        <div className="timing">
          <div></div>
          <div className="ty">6:19 pm</div>
          <div></div>
        </div>
        <div className="bubble">
          <div className="gt">
            <div className="gtr">Payment to SUDHANSHU</div>
            <h1>₹1</h1>
          </div>

          <div className="gy">
            <div className="ki">
              <div className="n ">
                <IoCheckmarkDoneCircleOutline />
              </div>
              <div className="max ra">Paid 1:19 pm</div>
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
