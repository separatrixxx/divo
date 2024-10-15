import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface SlideProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	photo: string,
	alt: string,
}