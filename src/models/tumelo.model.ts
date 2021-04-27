import { Tumelo } from '../interfaces/tumelo.interface';
import * as Axios from 'axios';

const axios = Axios.default;

export class TumeloImpl implements Tumelo {
  private client: Axios.AxiosInstance;
  private token: string;
  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
    });
  }

  public async setAuthToken(): Promise<void> {
    const {
      TUMELO_HABITAT_ID,
      TUMELO_USERNAME,
      TUMELO_PASSWORD,
    } = process.env;

    const config: Axios.AxiosRequestConfig = {
      url: '/authenticate',
      method: 'POST',
      data: {
        habitatId: TUMELO_HABITAT_ID,
        username: TUMELO_USERNAME,
        password: TUMELO_PASSWORD,
      },
    };
    try {
        const authResponse: Axios.AxiosResponse = await this.client.request(
          config
        );
        this.token = authResponse.data.token;
    } catch (e) {
        throw e;
    }
    
  }
}
