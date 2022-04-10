import { useEffect, useState, useContext, createContext } from 'react';
import Home from './pages/Home/Home';
import styles from './App.module.scss';
import Login from './pages/Login/Login';


export const NumContext = createContext();

function App() {

  const [loginStatus, setLoginStates] = useState({ status: true });

  useEffect(() => {
    var starCount = 400;
    var maxTime = 30;
    var universe = document.getElementById("universe");
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName("body")[0];
    var width = w.innerWidth || e.clientWidth || g.clientWidth;
    var height = w.innerHeight || e.clientHeight || g.clientHeight;
    debugger
    for (var i = 0; i < starCount; ++i) {
      var ypos = Math.round(Math.random() * height);
      var star = document.createElement("div");
      var speed = 1000 * (Math.random() * maxTime + 1);
      const num = 3 - Math.floor(speed / 1000 / 8)
      star.setAttribute("class", "star" + num);
      star.style.backgroundColor = "white";
      switch (num) {
        case 0:
          star.style.width = 1 + 'px'
          star.style.height = 1 + 'px'
          star.style.opacity = 1
          star.style.position = 'absoluate'
          break;
        case 1:
          star.style.width = 2 + 'px'
          star.style.height = 2 + 'px'
          star.style.opacity = 1
          star.style.borderRadius = `${50}%`
          star.style.position = 'absoluate'
          break;
        case 2:
          star.style.width = 3 + 'px'
          star.style.height = 3 + 'px'
          star.style.opacity = 1
          star.style.borderRadius = `${50}%`
          star.style.position = 'absoluate'
          break;
        case 3:
          star.style.width = 4 + 'px'
          star.style.height = 5 + 'px'
          star.style.opacity = 1
          star.style.borderRadius = `${50}%`
          star.style.position = 'absoluate'
          break;
      }
      universe.appendChild(star);
      star.animate(
        [
          {
            transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
          },
          {
            transform:
              "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
          }
        ],
        {
          delay: Math.random() * -speed,
          duration: speed,
          iterations: 1000
        }
      );
    }
  }, [])


  return (
    <div className={styles.App} id='universe'>
      {
        loginStatus.status === false ?
          <Home /> :
          <NumContext.Provider value={{ loginStatus, setLoginStates }}>
            <Login />
          </NumContext.Provider >
      }
      {/* <Home /> */}
    </div>
  );
}

export default App;
