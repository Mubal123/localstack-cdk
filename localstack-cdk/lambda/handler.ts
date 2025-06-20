import { DynamoDBClient, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1",
  endpoint: "http://localhost:4566",
});

export const handler = async (event: any = {}) => {
  const method = event.httpMethod;

  if (method === "POST") {
    const body = JSON.parse(event.body);
    const { id, message } = body;

    await client.send(
      new PutItemCommand({
        TableName: "MyTable",
        Item: {
          id: { S: id },
          message: { S: message },
        },
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "Item added",
        id,
        message,
      }),
    };
  }

  if (method === "GET") {
    const data = await client.send(
      new ScanCommand({
        TableName: "MyTable",
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ error: "Unsupported method" }),
  };
};
