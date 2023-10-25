import styles from './Header.module.css';
import rightHeaderImg from '../../assets/halp-background.png';
import logo from '../../assets/logo.png';
import breadImg from '../../assets/bread-img.png';
import qualityBadge from '../../assets/quality-badge.png';
import breadTextImg from '../../assets/bread-test.png';
import leftHeaderImg from '../../assets/header-left-img.png';
import Button from '../UI/Button/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles['left-bg-image']}>
          <img src={leftHeaderImg} alt="" />
        </div>
        <div className={styles['right-bg-image']}>
          <img src={rightHeaderImg} alt="" />
        </div>
        <div className="container">
          <div className={styles['main-content']}>
            <div className={styles.leftSection}>
              <div className={styles.topPart}>
                <img
                  className={styles.logo}
                  src={logo}
                  alt="Peachy Pup Bakery Logo"
                />
                <p className={styles.siteName}>Peachy Pup Bakery</p>
              </div>
              <div className={styles.middlePart}>
                <h1 className={styles.headerTitle}>Tasty pastries</h1>
                <p className={styles.headerText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the
                </p>
                <span className={styles.seeMoreButton}>
                  <Button text="see more" />
                </span>
              </div>
              <div className={styles.endPart}>
                <div className={styles.socialMedia}>
                  <ul className={styles.socialMediaList}>
                    <li className={styles.socialMediaItem}>
                      <a href="#" className={styles.socialMediaLink}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.579 6.85495C21.719 6.38995 21.579 6.04895 20.917 6.04895H18.724C18.166 6.04895 17.911 6.34395 17.771 6.66795C17.771 6.66795 16.656 9.38695 15.076 11.15C14.566 11.663 14.333 11.825 14.055 11.825C13.916 11.825 13.714 11.663 13.714 11.198V6.85495C13.714 6.29695 13.553 6.04895 13.088 6.04895H9.642C9.294 6.04895 9.084 6.30695 9.084 6.55295C9.084 7.08095 9.874 7.20295 9.955 8.69095V11.919C9.955 12.6259 9.828 12.755 9.548 12.755C8.805 12.755 6.997 10.026 5.924 6.90195C5.715 6.29495 5.504 6.04995 4.944 6.04995H2.752C2.125 6.04995 2 6.34495 2 6.66895C2 7.25095 2.743 10.1309 5.461 13.9399C7.273 16.5409 9.824 17.951 12.148 17.951C13.541 17.951 13.713 17.6379 13.713 17.0979V15.132C13.713 14.5059 13.846 14.38 14.287 14.38C14.611 14.38 15.169 14.544 16.47 15.797C17.956 17.283 18.202 17.95 19.037 17.95H21.229C21.855 17.95 22.168 17.6369 21.988 17.0189C21.791 16.4039 21.081 15.509 20.139 14.45C19.627 13.846 18.862 13.196 18.629 12.871C18.304 12.452 18.398 12.267 18.629 11.895C18.63 11.896 21.301 8.13395 21.579 6.85495Z"
                            fill="#C98A40"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className={styles.socialMediaItem}>
                      <a href="#" className={styles.socialMediaLink}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6.28669 3C4.46601 3 3 4.46601 3 6.28669V17.7133C3 19.534 4.46601 21 6.28669 21H12.4798V13.9631H10.6191V11.4296H12.4798V9.26512C12.4798 7.56457 13.5792 6.00319 16.1119 6.00319C17.1373 6.00319 17.8956 6.10163 17.8956 6.10163L17.8359 8.46751C17.8359 8.46751 17.0626 8.4602 16.2187 8.4602C15.3054 8.4602 15.159 8.881 15.159 9.57958V11.4296H17.9085L17.7887 13.9631H15.159V21H17.7133C19.534 21 21 19.534 21 17.7133V6.2867C21 4.46602 19.534 3.00002 17.7133 3.00002H6.28667L6.28669 3Z"
                            fill="#C98A40"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className={styles.socialMediaItem}>
                      <a href="#" className={styles.socialMediaLink}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.947 8.30496C20.9369 7.54758 20.7951 6.79773 20.528 6.08896C20.2964 5.49111 19.9425 4.94816 19.4892 4.49479C19.0358 4.04142 18.4929 3.68761 17.895 3.45596C17.1953 3.19331 16.4562 3.0513 15.709 3.03596C14.747 2.99296 14.442 2.98096 12 2.98096C9.55801 2.98096 9.24501 2.98096 8.29001 3.03596C7.54317 3.05141 6.80436 3.19343 6.10501 3.45596C5.50707 3.68745 4.96403 4.0412 4.51064 4.49459C4.05725 4.94798 3.7035 5.49102 3.47201 6.08896C3.20884 6.78809 3.06713 7.52707 3.05301 8.27396C3.01001 9.23696 2.99701 9.54196 2.99701 11.984C2.99701 14.426 2.99701 14.738 3.05301 15.694C3.06801 16.442 3.20901 17.18 3.47201 17.881C3.70389 18.4787 4.05791 19.0215 4.51145 19.4747C4.96499 19.9279 5.50807 20.2815 6.10601 20.513C6.80344 20.7862 7.54238 20.9383 8.29101 20.963C9.25401 21.006 9.55901 21.019 12.001 21.019C14.443 21.019 14.756 21.019 15.711 20.963C16.4582 20.9482 17.1974 20.8066 17.897 20.544C18.4947 20.312 19.0375 19.9581 19.4909 19.5048C19.9442 19.0515 20.2981 18.5086 20.53 17.911C20.793 17.211 20.934 16.473 20.949 15.724C20.992 14.762 21.005 14.457 21.005 12.014C21.003 9.57196 21.003 9.26196 20.947 8.30496ZM11.994 16.602C9.44001 16.602 7.37101 14.533 7.37101 11.979C7.37101 9.42496 9.44001 7.35596 11.994 7.35596C13.2201 7.35596 14.396 7.84302 15.263 8.71C16.1299 9.57698 16.617 10.7529 16.617 11.979C16.617 13.2051 16.1299 14.3809 15.263 15.2479C14.396 16.1149 13.2201 16.602 11.994 16.602ZM16.801 8.26296C16.204 8.26296 15.723 7.78096 15.723 7.18496C15.723 7.04346 15.7509 6.90334 15.805 6.77262C15.8592 6.64189 15.9385 6.5231 16.0386 6.42305C16.1387 6.32299 16.2574 6.24363 16.3882 6.18948C16.5189 6.13533 16.659 6.10746 16.8005 6.10746C16.942 6.10746 17.0821 6.13533 17.2129 6.18948C17.3436 6.24363 17.4624 6.32299 17.5624 6.42305C17.6625 6.5231 17.7418 6.64189 17.796 6.77262C17.8501 6.90334 17.878 7.04346 17.878 7.18496C17.878 7.78096 17.396 8.26296 16.801 8.26296Z"
                            fill="#C98A40"
                          />
                          <path
                            d="M11.994 14.982C13.6525 14.982 14.997 13.6375 14.997 11.979C14.997 10.3204 13.6525 8.97595 11.994 8.97595C10.3355 8.97595 8.99103 10.3204 8.99103 11.979C8.99103 13.6375 10.3355 14.982 11.994 14.982Z"
                            fill="#C98A40"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className={styles.socialMediaItem}>
                      <a href="#" className={styles.socialMediaLink}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.75 5.96017C21.0328 6.26954 20.2524 6.4922 19.4485 6.57892C20.2831 6.08306 20.9081 5.2997 21.2063 4.37579C20.4231 4.8417 19.5651 5.16841 18.6703 5.34142C18.2964 4.94163 17.8441 4.62315 17.3417 4.40581C16.8392 4.18847 16.2974 4.07693 15.75 4.07813C13.5352 4.07813 11.7539 5.87345 11.7539 8.07657C11.7539 8.38595 11.7914 8.69532 11.8524 8.99298C8.53596 8.81954 5.57815 7.23517 3.61174 4.80938C3.25344 5.42137 3.06568 6.1182 3.06799 6.82735C3.06799 8.21485 3.77346 9.43829 4.84924 10.1578C4.21527 10.1329 3.59614 9.9586 3.04221 9.64923V9.69845C3.04221 11.6414 4.41565 13.2516 6.24612 13.6219C5.90243 13.7112 5.54887 13.7568 5.19377 13.7578C4.93362 13.7578 4.68752 13.732 4.43909 13.6969C4.94534 15.2813 6.41956 16.432 8.17502 16.4695C6.80159 17.5453 5.08127 18.1781 3.21331 18.1781C2.87815 18.1781 2.56877 18.1664 2.24768 18.1289C4.01956 19.2656 6.1219 19.9219 8.38596 19.9219C15.736 19.9219 19.7578 13.8328 19.7578 8.54767C19.7578 8.37423 19.7578 8.20079 19.7461 8.02735C20.5242 7.45782 21.2063 6.75235 21.75 5.96017Z"
                            fill="#C98A40"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <p className={styles.contactPhone}>
                  <span className={styles['contactPhone-left']}>
                    Telephone:
                  </span>{' '}
                  <span className={styles['contactPhone-right']}>
                    +7 700 000 00 00
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.breadImage}
                  src={breadImg}
                  alt="Delicious Breads"
                />
                <img
                  className={styles.breadTextImg}
                  src={breadTextImg}
                  alt="Text around the bread image"
                />
                <div className={styles.qualityBadge}>
                  <img
                    className={styles.qualityBadgeImg}
                    src={qualityBadge}
                    alt="Quality badge"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
