import styles from './Testimonial.module.css';

const Testimonial = ({ data }) => {
  return (
    <div className={styles.testimonial}>
      <p className={styles.author}>{data.author}</p>
      <p className={styles.testimonialText}>{data.text}</p>
      <div className={styles.starRating}>
        {Array.from({ length: data.stars }, (_, index) => (
          <span key={index} className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.9627 6.20682L11.4996 5.55819L9.50448 1.51346C9.44999 1.40272 9.36034 1.31307 9.2496 1.25858C8.97186 1.12147 8.63436 1.23572 8.4955 1.51346L6.50038 5.55819L2.03729 6.20682C1.91425 6.2244 1.80175 6.2824 1.71561 6.37029C1.61148 6.47732 1.5541 6.62131 1.55608 6.77062C1.55806 6.91993 1.61923 7.06235 1.72616 7.16658L4.95526 10.3148L4.19237 14.7603C4.17448 14.8637 4.18592 14.9701 4.2254 15.0673C4.26488 15.1646 4.33082 15.2488 4.41573 15.3105C4.50065 15.3722 4.60114 15.4088 4.70583 15.4163C4.81051 15.4237 4.91519 15.4017 5.008 15.3527L8.99999 13.2539L12.992 15.3527C13.101 15.4107 13.2275 15.4301 13.3488 15.409C13.6547 15.3562 13.8603 15.0662 13.8076 14.7603L13.0447 10.3148L16.2738 7.16658C16.3617 7.08045 16.4197 6.96795 16.4373 6.8449C16.4848 6.53729 16.2703 6.25252 15.9627 6.20682Z"
                fill="#C98A40"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
