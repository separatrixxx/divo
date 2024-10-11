import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface FriendsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    balance: number,
}
