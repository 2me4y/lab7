import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Узнать больше
      </a>
      <a href="#contact" className="btn sec">
        Контакты
      </a>
    </div>
  );
}

export default Buttons;
