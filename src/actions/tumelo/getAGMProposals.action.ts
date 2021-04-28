import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import 'source-map-support/register';
import ResponseModel from '../../models/response.model';
import { StatusCode } from '../../enums/status-code.enum';
import { ResponseMessage } from '../../enums/response-message.enum';
import { TumeloImpl } from '../../models/tumelo.model';
import { GetAMGProposalsRequest } from 'src/interfaces/tumelo.interface';

export const getAGMProposals: APIGatewayProxyHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const { TUMELO_URL } = process.env;

  const pathParameter: GetAMGProposalsRequest = {
    organizationId: event.pathParameters.organizationId,
    meetingId: event.pathParameters.meetingId,
  };
  const tumelo = new TumeloImpl(TUMELO_URL);
  const response = new ResponseModel();

  try {
    const organizations = await tumelo.getAGMProposals(pathParameter);
    response.setCode(StatusCode.OK);
    response.setMessage(ResponseMessage.SUCCESS);
    response.setData(organizations);
  } catch (e) {
    response.setCode(StatusCode.ERROR);
    response.setMessage(ResponseMessage.INVALID_REQUEST);
  }
  return response.generate();
};
