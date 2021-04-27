import type { AWS } from '@serverless/typescript';

// Functions
import functions from './resources/functions';

const serverlessConfiguration: AWS = {
  service: 'project-dashboard',
  frameworkVersion: '2',
  custom: {
    region: '${opt:region, self:provider.region}',
    stage: '${opt:stage, self:provider.stage}',
    prefix: '${self:service}-${self:custom.stage}',
    ['serverless-offline']: {
      httpPort: 3000,
      host: '0.0.0.0',
      babelOptions: {
        presets: ['env'],
      },
    },
  },
  plugins: [
    'serverless-bundle',
    'serverless-offline',
    'serverless-dotenv-plugin',
  ],
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stage: 'local',
    region: 'eu-west-1',
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}',
      TUMELO_URL: 'https://api.prod.tumelo.com/v1/authenticate',
      TUMELO_HABITAT_ID: '8f5d6c1c-24c3-4d3f-83bb-91b379ad8cad',
      TUMELO_USERNAME: 'iclim-production',
      TUMELO_PASSWORD: 'fV6Antgn-PMfvcwlNJTT',
    },
  },
  functions,
  /* resources: {
    Resources: dynamoDbTables,
  }, */
};

module.exports = serverlessConfiguration;
