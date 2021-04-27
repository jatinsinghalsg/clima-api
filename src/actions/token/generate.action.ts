import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';
import ResponseModel from '../../models/response.model';
import axios from "axios";
import {AxiosResponse, AxiosRequestConfig} from "axios";
import { StatusCode } from '../../enums/status-code.enum';
import { ResponseMessage } from '../../enums/response-message.enum';

export const token: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {

  const {
    TUMELO_URL,
    TUMELO_HABITAT_ID,
    TUMELO_USERNAME,
    TUMELO_PASSWORD,
  } = process.env;

  const config: AxiosRequestConfig = {
    url: TUMELO_URL,
    method: 'POST',
    data: {
      habitatId: TUMELO_HABITAT_ID,
      username: TUMELO_USERNAME,
      password: TUMELO_PASSWORD,
    },
  };
  const response = new ResponseModel()
  try {
    const axiosResponse: AxiosResponse = await axios.request(config);
    response.setCode(StatusCode.OK);
    response.setMessage(ResponseMessage.SUCCESS);
    response.setData(axiosResponse.data);
  } catch (e) {
    response.setCode(StatusCode.ERROR);
    response.setMessage(ResponseMessage.INVALID_REQUEST);
  }
  return response.generate();
};
