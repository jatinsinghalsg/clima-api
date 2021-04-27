import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';
import ResponseModel from '../../models/response.model';
import { StatusCode } from '../../enums/status-code.enum';
import { ResponseMessage } from '../../enums/response-message.enum';
import { TumeloImpl } from '../../models/tumelo.model';

export const getSubscribedOrganizations: APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
  const {
    TUMELO_URL
  } = process.env;

  const tumelo = new TumeloImpl(TUMELO_URL);

  const response = new ResponseModel();
  try {
    const organizations = await tumelo.getSubscribedOrganizations();
    response.setCode(StatusCode.OK);
    response.setMessage(ResponseMessage.SUCCESS);
    response.setData(organizations);
  } catch (e) {
    response.setCode(StatusCode.ERROR);
    response.setMessage(ResponseMessage.INVALID_REQUEST);
  }
  return response.generate();
};
