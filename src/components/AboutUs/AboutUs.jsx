import Button from '../UI/Button/Button';
import styles from './AboutUs.module.css';
import chiefImg from '../../assets/cheif-img.png';

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.leftPart}>
            <h2 className={styles.heading}>About us</h2>
            <p className={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum..
            </p>
            {/* <button className={styles.contactButton}>Contact Us</button> */}
            <Button text="contact us" position="left" />
          </div>
          <div className={styles.rightPart}>
            <img src={chiefImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
