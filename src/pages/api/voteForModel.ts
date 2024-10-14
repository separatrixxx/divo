import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id, model_id } = req.query;
        const response = await axios.post(`${process.env.API_DOMAIN}/api/model/vote`, {}, {
            headers: {
                'X-API-Key': process.env.API_KEY,
            },
            params: { user_id, model_id }
        });
        res.status(200).json(response.data);
    } catch (err: any) {
        res.status(500).json({ error: 'Error voting for model' });
    }
}
