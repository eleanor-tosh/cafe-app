import { stripBasename } from '@remix-run/router'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Name must be 20 characters or less.')
        .required('Name is required.'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required.'),
      subject: Yup.string()
        .max(20, 'Subject must be 20 characters or less.')
        .required('Subject is required.'),
      message: Yup.string()
        .max(200, 'Email must be 200 characters or less.')
        .required('Message is required.'),
    }),

    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className="container mx-auto py-20">
      <div className="py-40 pb-10 md:px-20" id="contact-section">
        <h1 className="font-bold text-bean text-center font-serif text-3xl leading-relaxed">
          Contact
        </h1>
      </div>

      <div className="md:grid grid-cols-2">
        <div>
          <img
            src="/images/end.jpg"
            alt="Coffee beans, ground coffee, and made coffee"
            className="w-full pb-10"
          ></img>
        </div>

        <div>
          <p className="font-medium text-text-grey font-serif text-xl p-10 mb-10 leading-relaxed">
            Call us on +64 03 452 7885, email brokobean@cafe.com, or fill in the
            form below.
            <br></br>
            We will get back to you as soon as we can during our business hours.
          </p>

          <form onSubmit={formik.handleSubmit} className="md:px-24">
            <div>
              <label
                for="name"
                className={`font-bold text-bean font-serif text-xl p-10 leading-relaxed ${
                  formik.touched.name && formik.errors.name
                    ? 'text-red-400'
                    : ''
                }`}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : 'Name:'}
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="name"
                  required
                  className="border rounded p-2 m-5 md:w-full font-medium"
                ></input>
              </label>
            </div>

            <div>
              <label
                for="email"
                className={`font-bold text-bean font-serif text-xl p-10 leading-relaxed ${
                  formik.touched.email && formik.errors.email
                    ? 'text-red-400'
                    : ''
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : 'Email:'}
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="email"
                  required
                  className="border rounded p-2 m-5 md:w-full font-medium"
                ></input>
              </label>
            </div>

            {/* <div>
              <label
                for="phone"
                className="font-bold text-bean font-serif text-xl p-10 leading-relaxed"
              >
                Phone:
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="phone"
                  className="border rounded p-2 m-5 md:w-full"
                ></input>
              </label>
            </div> */}

            <div>
              <label
                for="subject"
                className={`font-bold text-bean font-serif text-xl p-10 leading-relaxed ${
                  formik.touched.subject && formik.errors.subject
                    ? 'text-red-400'
                    : ''
                }`}
              >
                {formik.touched.subject && formik.errors.subject
                  ? formik.errors.subject
                  : 'Subject:'}
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="subject"
                  required
                  className="border rounded p-2 m-5 md:w-full font-medium"
                ></input>
              </label>
            </div>

            <div>
              <label
                for="message"
                className={`font-bold text-bean font-serif text-xl p-10 leading-relaxed ${
                  formik.touched.message && formik.errors.message
                    ? 'text-red-400'
                    : ''
                }`}
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : 'Message:'}
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="message"
                  required
                  className="border rounded p-2 m-5 md:w-full font-medium"
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-bean hover:bg-text-grey text-white font-bold py-2 px-10 rounded my-5 mx-10"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
