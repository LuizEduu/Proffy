import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/32395420?s=460&u=1daaa81e3b2798ee5957b0301d84f3bc23c2cad0&v=4"
          alt="Luiz Eduardo"
        />
        <div>
          <strong>Luiz Eduardo</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada. Apaixonado por
        explodir coisas em laboratório e por mudar a vida das pessoas através de
        experências.
        <br /> <br />
        Mais de 200 mil pessoas já passaram por uma das minhas explosões
      </p>

      <footer>
        <p>
          Preço/hora:
          <strong>RS 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
