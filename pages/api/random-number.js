// import { NextApiRequest, NextApiResponse } from 'next';

export default (req, res) => {
  res.json({
    num: Math.floor(Math.random() * 10),
  });
};

// localhost:3000/api/random-number

// Basically this is api folder and here we dont have to import any react component we have to just return a function which return a response we send a request and we will get the response which we send

// Mainly we used for oAuth login like google or okta login or JWT login
