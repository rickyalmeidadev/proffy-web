import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

interface Teacher {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost:number;
    subject: string;
    whatsapp: string;
}

const TeachersList: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const handleSearchTeachers = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setTeachers(response.data);
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },

            ]}
            defaultValue={subject}
            onChange={event => setSubject(event.target.value)}
          />

          <Select
            name="week-day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },

            ]}
            defaultValue={weekDay}
            onChange={event => setWeekDay(event.target.value)}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={event => setTime(event.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}

      </main>
    </div>
  );
};

export default TeachersList;
