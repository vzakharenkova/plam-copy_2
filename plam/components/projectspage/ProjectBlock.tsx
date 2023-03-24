import styles from '@/styles/pages/ProjectsPage.module.scss';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectPageProps {
  imgSrc: StaticImageData;
  altText: string;
  title: string;
  text: string;
}

function ProjectBlock({ imgSrc, altText, title, text }: ProjectPageProps) {
  return (
    <div className={styles.project}>
      <Image className={styles.project_img} src={imgSrc} alt={altText} />
      <div className={styles.project_info}>
        <h3 className={styles.project_title}>
          <Link href="projects/project_1">{title}</Link>
        </h3>
        <p className={styles.project_description}>{text}</p>
      </div>
    </div>
  );
}

export default ProjectBlock;
