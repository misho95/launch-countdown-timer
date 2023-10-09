import hills from "./assets/images/pattern-hills.svg";
import stars from "./assets/images/bg-stars.svg";
import fbIcon from "./assets/images/icon-facebook.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";
import pinsterestIcon from "./assets/images/icon-pinterest.svg";
import Timer from "./timer";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-purple2 relative">
        <div className="absolute top-0 left-0 w-full h-screen bg-[url(./assets/images/bg-stars.svg)] flex flex-col justify-center items-center gap-20">
          <h1 className="text-xl text-white select-none">
            WE'RE LAUNCHING SOON
          </h1>
          <div className="flex gap-10">
            <Timer time={"08"} title={"DAYS"} />
            <Timer time={"23"} title={"HOURS"} />
            <Timer time={"55"} title={"MINUTS"} />
            <Timer time={"41"} title={"SECONDS"} />
          </div>
        </div>
        <div
          className={`flex justify-center items-center absolute bottom-0 left-0  w-full  h-h168 sm:h-h197 bg-[url('./assets/images/pattern-hills.svg')] bg-no-repeat bg-cover  bg-center sm:bg-top z-50`}
        >
          <div className="flex gap-5">
            <button>
              <img src={fbIcon} />
            </button>
            <button>
              <img src={instagramIcon} />
            </button>
            <button>
              <img src={pinsterestIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
