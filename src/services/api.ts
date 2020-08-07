import axios, { AxiosInstance } from 'axios';

interface IConnections {
  total: number;
}

interface ITeacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost:number;
  subject: string;
  whatsapp: string;
}

interface ITeacherParams {
  subject: string;
  weekDay: string;
  time: string;
}

interface ScheduleItems {
  week_day: number;
  from: string;
  to: string;
}

interface ICreateClassBody {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: ScheduleItems[];
}

export default class Client {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000',
    });

    this.getConnections = this.getConnections.bind(this);
    this.getTeachers = this.getTeachers.bind(this);
    this.createConnection = this.createConnection.bind(this);
    this.createClass = this.createClass.bind(this);
  }

  async getConnections() {
    return this.api.get<IConnections>('/connections');
  }

  async getTeachers(params: ITeacherParams) {
    return this.api.get<ITeacher[]>('/classes', {
      params: {
        subject: params.subject,
        week_day: Number(params.weekDay),
        time: params.time,
      },
    });
  }

  async createConnection(userId: number) {
    return this.api.post<ITeacher>('/connections', {
      user_id: userId,
    });
  }

  async createClass(body: ICreateClassBody) {
    return this.api.post<ITeacher>('/classes', body);
  }
}
