import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { name } = req.query;
    res.status(200).json({ message: `こんにちは、${name}さん！これはGETリクエストへのレスポンスです！` });
  } else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `こんにちは、${name}さん！これはPOSTリクエストへのレスポンスです！` });
  } else {
    res.status(405).json({ message: '許可されていないメソッドです。' });
  }
}
