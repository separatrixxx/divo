import { SlideProps } from './Slide.props';
import styles from './Slide.module.css';
import Image from 'next/image';


export const Slide = ({ photo, alt }: SlideProps): JSX.Element => {
	return (
		<div className={styles.modelPhoto}>
			<Image className={styles.photo}
				draggable='false'
				loader={() => photo}
				src={photo}
				alt={alt}
				width={1}
				height={1}
				unoptimized={true}
				priority
				quality={20}
			/>
		</div>
	);
};