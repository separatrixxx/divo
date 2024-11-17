import { ReactNode } from 'react';

export interface ModalProps {
	isActive: boolean,
	setIsActive: (e: boolean) => void,
	children: ReactNode,
}