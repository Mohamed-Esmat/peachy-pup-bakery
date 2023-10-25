import { useState } from 'react';
import useAddInput from '../../hooks/use-input';
import styles from './ContactUs.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { customFetch } from '../../util';
import axios from 'axios';

const ContactUs = () => {
  //
  const phonePattern = /^01[0-9]{9}$/;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useAddInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useAddInput((value) => value.includes('@'));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useAddInput((value) => phonePattern.test(value));

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      if (!enteredNameIsValid || !enteredPhoneIsValid || !enteredEmailIsValid) {
        nameBlurHandler();
        phoneBlurHandler();
        emailBlurHandler();
        toast.error('Please Enter a valid data!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        return;
      } else {
        // Send the formData to the server
        setIsSubmitting(true);
        const formData = {
          name: enteredName,
          phone: enteredPhone,
          email: enteredEmail,
        };

        const response = await axios.post(
          // '../../../netlify/functions/proxy',
          'http://upskilling-egypt.com:3000/contact',
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status >= 200 && response.status < 300) {
          console.log(response);
          setIsSubmitting(false);
          nameReset();
          phoneReset();
          emailReset();
          toast.success('Successfully submitted the form.', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      }

      // setFormData();
    } catch (error) {
      setIsSubmitting(false);
      console.log(error.errors);
      toast.error("Sorry we couldn't submit the form, Please try later", {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };
  //
  return (
    <section className={styles.contactUs}>
      <div className="container">
        <h2 className={styles.contactTitle}>Contact us</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  className={`${nameInputHasError && styles['invalid']} `}
                />
                {nameInputHasError && (
                  <p className="text-red-600">First name can't be empty!</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  className={`${emailInputHasError && styles['invalid']} `}
                />
                {emailInputHasError && (
                  <p className="text-red-600">Email have to include '@'!</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={enteredPhone}
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                  className={`${phoneInputHasError && styles['invalid']} `}
                />
                {phoneInputHasError && (
                  <p className="text-red-600">
                    Enter a valid Egyptian phone number (11 numbers starts with
                    01).
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={styles.sendButton}
                onClick={(e) => handleSave(e)}
              >
                {isSubmitting ? 'Submitting...' : 'Send'}
              </button>
            </form>
            <ToastContainer />
          </div>

          <div className={styles.contactInfo}>
            <div className={styles['contactInfo-container']}>
              <span className={styles['contactInfo-container__email']}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L13.06 12.34C12.41 12.75 11.59 12.75 10.94 12.34L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
                    fill="#C98A40"
                  />
                </svg>
              </span>
              <p>upskilling.eg1@gmail.com</p>
            </div>
            <div className={styles['contactInfo-container']}>
              <span className={styles['contactInfo-container__number']}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.23 15.26L16.69 14.97C16.3913 14.9349 16.0886 14.968 15.8046 15.0667C15.5205 15.1654 15.2625 15.3273 15.05 15.54L13.21 17.38C10.3712 15.9362 8.06378 13.6288 6.62 10.79L8.47 8.94001C8.9 8.51001 9.11 7.91001 9.04 7.30001L8.75 4.78001C8.69331 4.29219 8.4592 3.84225 8.09224 3.51586C7.72528 3.18947 7.25111 3.00943 6.76 3.01001H5.03C3.9 3.01001 2.96 3.95001 3.03 5.08001C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                    fill="#C98A40"
                  />
                </svg>
              </span>
              <p>+20 115 493 2137</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
