import xmastree from "../public/xmastree.svg";
import gingeman from "../public/gingeman.svg";
import "./App.css";

function App() {
  const onClick = async () => {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";

    const doStuff = async () => {
      let [tab] = await chrome.tabs.query({ active: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: () => {
          if (document.URL.indexOf("google.com") >= 0) {
            alert("Merry Christmas, ya filthy animal");
          } else {
            alert("No need to ask if you've been naughty or nice...");
          }

          document.body.style.backgroundColor = "red";

          const title = document.createElement("h1");
          const titleText = document.createTextNode("And keep the change");
          title.appendChild(titleText);
          title.style.textAlign = "center";
          title.style.whiteSpace = "nowrap";
          title.style.color = "white";

          const googleNav = document.querySelector('[role="navigation"]');
          if (googleNav) {
            // can do a few different positions - check stackoverflow
            googleNav.insertAdjacentElement("afterend", title);
          } else {
            const existingTitle = document.querySelector("h1");
            existingTitle!.innerHTML = "...enjoy your coal!";
          }
        },
      });
    };

    setTimeout(doStuff, 1000);
  };

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank"> */}
        <img src={xmastree} className="logo" alt="christmas tree" />
        {/* </a>
        <a href="https://react.dev" target="_blank"> */}
        <img src={gingeman} className="logo react" alt="gingeman" />
        {/* </a> */}
      </div>
      <h1>Ho Ho Ho</h1>
      <div className="card">
        <button onClick={onClick}>Go on - press me</button>
      </div>
      <p>Enjoy my mastery muahahahahaha</p>
    </>
  );
}

export default App;
