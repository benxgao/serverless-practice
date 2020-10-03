// const uuid = require('uuid');
// const dynamodb = require('./dynamodb');

module.exports.create = (_event, _context, callback) => {
  const mockMessage = {
    body: 'hello',
    date_created: new Date().getTime(),
  };

  const response = {
    headers: { 'Access-Control-Allow-Origin': '*' }, // CORS requirement
    statusCode: 200,
  };

  response.body = JSON.stringify({
    message: 'Text message successfully sent!',
    data: { message: mockMessage },
  });

  console.log('response', response);

  callback(null, response);

  // const timestamp = new Date().getTime();
  // const data = JSON.parse(event.body);
  // if (typeof data.text !== 'string') {
  //   console.error('Validation Failed');
  //   callback(null, {
  //     statusCode: 400,
  //     headers: { 'Content-Type': 'text/plain' },
  //     body: "Couldn't create the todo item.",
  //   });
  //   return;
  // }

  // const params = {
  //   TableName: process.env.DYNAMODB_TABLE,
  //   Item: {
  //     id: uuid.v1(),
  //     text: data.text,
  //     checked: false,
  //     createdAt: timestamp,
  //     updatedAt: timestamp,
  //   },
  // };

  // dynamodb.put(params, (error) => {
  // handle potential errors
  // if (error) {
  //   console.error(error);
  //   callback(null, {
  //     statusCode: error.statusCode || 501,
  //     headers: { 'Content-Type': 'text/plain' },
  //     body: "Couldn't create the todo item.",
  //   });
  //   return;
  // }

  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify(params.Item),
  // };
  // callback(null, response);
  // });
};