import styles from './HowWeWork.module.css';
import howweImg1 from '../../assets/howweworkimage4.png';
import howweImg2 from '../../assets/howweworkimage2.png';
import howweImg3 from '../../assets/howweworkimage3.png';
import howweImg4 from '../../assets/howweworkimage1.png';
import Button from '../UI/Button/Button';

function HowWeWork() {
  return (
    <section className={styles.howWeWork}>
      <div className={styles['howWeWork-container']}>
        <div className={styles.background}>
          {/* Left-aligned background image */}
        </div>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.section}>
              <div className={styles.sectionLeft}>
                <p className={styles.paragraph}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
              </div>
              <div className={styles.sectionRight}>
                <h2 className={styles.heading}>How We Work</h2>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.imageContainer}>
                <div className={styles['single-image']}>
                  <img src={howweImg1} alt="Bread image" />
                </div>
                <div className={styles['single-image']}>
                  <img src={howweImg2} alt="Bread image" />
                </div>
                <div className={styles['single-image']}>
                  <img src={howweImg3} alt="Bread image" />
                </div>
                <div className={styles['single-image']}>
                  <img src={howweImg4} alt="Bread image" />
                </div>
              </div>
            </div>
            <span className={styles['contactBtn-container']}>
              {/* <span className={styles.contactButton}>Contact Us</span> */}
              <Button text="contact us" position="center" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
