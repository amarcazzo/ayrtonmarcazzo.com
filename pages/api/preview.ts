import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.setPreviewData({});
  res.writeHead(307, { Location: '/' });
  res.end();
};
