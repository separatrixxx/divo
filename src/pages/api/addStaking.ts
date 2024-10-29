import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id, amount, duration_days } = req.query;

        const response = await axios.post(`${process.env.API_DOMAIN}/api/staking/add`, {}, {
            headers: {
                'X-API-Key': process.env.API_KEY,
            },
            params: { user_id, amount, duration_days }
        });
        res.status(200).json(response.data);
    } catch (err: any) {
        res.status(500).json({ error: 'Error add staking' });
    }
}
