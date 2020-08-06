import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm: React.FC = () => (
  <div id="page-teacher-form" className="container">
    <PageHeader
      title="Que incŕivel que você quer dar aulas."
      description="O primeiro passo é preencher esse formulário de inscrição"
    />

    <main>
      <fieldset>
        <legend>Seus dados</legend>

        <Input name="name" label="Nome completo" />
        <Input name="avatar" label="Avatar" />
        <Input name="whatsapp" label="WhatsApp" />
        <Textarea name="bio" label="Biografia" />
      </fieldset>

      <fieldset>
        <legend>Sobre a aula</legend>

        <Select
          name="subject"
          label="Matéria"
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Educação física', label: 'Educação física' },
            { value: 'Física', label: 'Geografia' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'História', label: 'História' },
            { value: 'Inglês', label: 'Inglês' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Química', label: 'Química' },
          ]}
        />
        <Input name="cost" label="Custo da sua hora por aula" />
      </fieldset>

      <fieldset>
        <legend>
          Horários disponíveis
          <button type="button">+ Novo horário</button>
        </legend>

        <div className="schedule-item">
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
          />
          <Input name="from" label="Das" type="time" />
          <Input name="to" label="Até" type="time" />
        </div>
      </fieldset>

      <footer>
        <p>
          <img src={warningIcon} alt="Aviso importante" />
        </p>
        <button type="button">
          Salvar cadastro
        </button>
      </footer>
    </main>
  </div>
);

export default TeacherForm;
