import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { user_id } = req.query;
        const response = await axios.get(`${process.env.API_DOMAIN}/api/users/user_data`, {
            headers: {
                'X-API-Key': process.env.API_KEY,
            },
            params: { user_id }
        });
        res.status(200).json(response.data);
    } catch (err: any) {
        if (err.response && err.response.data.error_message === 'User not found') {
            res.status(404).json({ error_message: 'User not found' });
        } else {
            res.status(500).json({ error_message: 'Error fetching user data' });
        }
    }
}
