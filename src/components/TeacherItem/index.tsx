import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

interface IProps {
  teacher: {
    id: number,
    name: string,
    avatar: string,
    bio: string,
    cost:number,
    subject: string,
    whatsapp: string,
  }
}

const TeacherItem: React.FC <IProps> = ({ teacher }) => {
  const cost = new Intl.NumberFormat(
    'pt-BR', { style: 'currency', currency: 'BRL' },
  ).format(teacher.cost);

  const createNewConnection = () => {
    api.post('/connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>{cost}</strong>
        </p>
        <a
          href={`https://wa.me/${teacher.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
