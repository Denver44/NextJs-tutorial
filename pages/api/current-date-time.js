// import { NextApiRequest, NextApiResponse } from 'next';

export default (req, res) => {
  let currentDate = new Date();

  res.json({
    currentDateAndTime: `${
      currentDate.getDate() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getFullYear() +
      ' @ ' +
      currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds()
    }`,
  });
};


// localhost:3000/api/current-date-time