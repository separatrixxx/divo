import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface StartPopupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	minutesPassed: number,
	setIsActive: (e: boolean) => void,
}
