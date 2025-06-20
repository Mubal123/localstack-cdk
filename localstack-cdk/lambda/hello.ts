import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

const db = new DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || 'MyTable';

export const handler: APIGatewayProxyHandler = async (event) => {
  const method = event.httpMethod;

  if (method === 'POST') {
    const body = JSON.parse(event.body || '{}');
    const { id, name, status } = body;

    await db.put({
      TableName: TABLE_NAME,
      Item: { id, name, status },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data berhasil disimpan', data: body }),
    };
  }

  if (method === 'GET') {
    const result = await db.scan({ TableName: TABLE_NAME }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Metode tidak dikenali' }),
  };
};

