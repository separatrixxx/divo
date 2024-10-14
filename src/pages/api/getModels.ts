import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id } = req.query;
        const response = await axios.get(`${process.env.API_DOMAIN}/api/models/`, {
            headers: {
                'X-API-Key': process.env.API_KEY,
            },
            params: {
                user_id,
                page: 1,
                per_page: 100
            }
        });
        res.status(200).json(response.data);
    } catch (err: any) {
        res.status(500).json({ error: 'Error fetching models' });
    }
}
