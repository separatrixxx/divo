import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	id: string, 
	picked_photo: number,
	photo_urls: string[],
	isVoted: boolean,
}
