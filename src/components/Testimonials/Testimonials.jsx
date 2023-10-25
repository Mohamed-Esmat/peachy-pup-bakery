import Testimonial from './Testimonial';
import Button from '../../components/UI/Button/Button';
import styles from './Testimonials.module.css';

const testimonialData = [
  {
    id: 1,
    author: 'John Doe',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    stars: 5,
  },
  {
    id: 2,
    author: 'Jane Smith',
    text: 'In hac Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero fuga sed, maxime corrupti nobis recusandae unde repudiandae vitae, esse quos consectetur eos officia. Non deleniti perspiciatis eum ipsa vel?.',
    stars: 4,
  },
  {
    id: 3,
    author: 'Alice Johnson',
    text: 'Vestibulum non Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ipsum ab ullam et corporis officia eum. Molestiae accusamus numquam, mollitia magnam cum repudiandae doloremque iure aliquid dolor totam facere dolore?.',
    stars: 5,
  },
  {
    id: 4,
    author: 'Bob Brown',
    text: 'Sed ultrices dui Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia quaerat, harum molestiae numquam suscipit corrupti quam, rerum illum nemo deserunt dolores autem sapiente quas quibusdam doloremque nesciunt inventore placeat!.',
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>TESTIMONIALS</h2>
        <div className={styles.testimonialsContainer}>
          {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </div>
        <Button text="Contact Us" position="center" />
      </div>
    </section>
  );
};

export default Testimonials;
