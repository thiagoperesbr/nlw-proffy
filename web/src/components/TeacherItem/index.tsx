import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/31230416?s=460&u=b4fb49e90cf2c85b094240a92eadf66827e4ba14&v=4" alt="Thiago Peres"/>
        <div>
          <strong>Thiago Peres</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
        Mais de 200.00 pessoas já passaram por uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;