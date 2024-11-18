import { SlideProps } from './Slide.props';
import styles from './Slide.module.css';
import Image from 'next/image';


export const Slide = ({ photo, alt }: SlideProps): JSX.Element => {
	const ext = photo.slice(photo.length - 4).toLowerCase();

	return (
		<div className={styles.modelPhoto}>
			{
				ext !== '.mp4' ?
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
				:
					<video className={styles.photo} autoPlay playsInline loop muted no-controls >
						<source src={photo} type="video/mp4"></source>
					</video>
			}
		</div>
	);
};