import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeachersList: React.FC = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="Estes são os proffys disponíveis.">
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject" />
        </div>

        <div className="input-block">
          <label htmlFor="week-day">Dia da semana</label>
          <input type="text" id="week-day" />
        </div>

        <div className="input-block">
          <label htmlFor="time">Hora</label>
          <input type="text" id="time" />
        </div>
      </form>
    </PageHeader>

    <main>
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/60705947?s=460&u=e8e6bbb598b37394cc1a783a494b66b4e48eab2f&v=4"
            alt="Ricky Almeida"
          />
          <div>
            <strong>Ricky Almeida</strong>
            <span>Desenvolvimento Web</span>
          </div>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sequi suscipit
          veniam vero hic omnis excepturi consectetur qui repellendus explicabo reiciendis
          recusandae minima iusto, laborum enim aliquid eaque accusamus. Magnam.
        </p>
        <footer>
          <p>
            Preço/hora
            <strong> R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  </div>
);

export default TeachersList;
