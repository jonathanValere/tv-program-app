import "./App.css";
import datas from "./program.json";
import logo from "./assets/img/M6.svg";
import Header from "./components/Header";
import Program from "./components/Program";

function App() {
  return (
    <section className="container">
      <Header logo={logo} />
      <ul>
        {datas.map((element, index) => (
          <Program
            key={index}
            time={element.time}
            title={element.title}
            type={element.type}
            duration={element.duration}
            image={element.image}
            direct={element.direct}
            isUnseen={element.isUnseen}
          />
        ))}
      </ul>
    </section>
  );
}

export default App;
