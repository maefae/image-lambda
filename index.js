const AWS = require('aws-sdk');

exports.handler = async (event) => {

  AWS.config.update({ region: 'us-east-1' });

  const s3 = new AWS.S3();


  const params = { 
    Bucket: 'megan-seibert',
    Key: 'lab17.json'
  };

  const data = await s3.getObject(params).promise();
// console.log(data)
  const objectData = data.Body;
    
    


  const parsedData = JSON.parse(objectData);
  const {numberOne, numberTwo} = parsedData.numbers
console.log('VALUE: ', numberOne + numberTwo)

  return parsedData;
}; 
