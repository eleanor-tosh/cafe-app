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
        .max(20, 'Name must be 20 characters or less')
        .required('Required field'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required field'),
      subject: Yup.string()
        .max(20, 'Subject must be 20 characters or less')
        .required('Required field'),
      message: Yup.string()
        .max(500, 'Email must be 500 characters or less')
        .required('Required field'),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm({ values: '' })
    },
  })

  return (
    <div className="container mx-auto md:pt-36">
      <div className="pt-52 md:py-40 md:px-20" id="contact-section">
        <h1 className="pb-10 font-bold text-coffee-brown text-center font-serif text-3xl leading-relaxed">
          Contact
        </h1>

        <div className="md:grid grid-cols-2">
          <div>
            <img
              src="/images/end.jpg"
              alt="Coffee beans, ground coffee, and made coffee"
              className="w-full pb-10"
            ></img>
          </div>

          <div>
            <p className="font-medium text-text-grey font-serif text-xl p-10 leading-relaxed">
              Call us on +64 03 452 7885, email brokobean@cafe.com, or fill in
              the form below.
              <br></br>
              We will get back to you as soon as we can during our business
              hours.
            </p>

            <form onSubmit={formik.handleSubmit} className="md:px-24">
              <div className="pb-10 flex md:block">
                <label
                  for="name"
                  className="font-bold text-coffee-brown font-serif text-xl px-10 md:px-0 leading-relaxed"
                >
                  Name<p className="text-red-400 inline">*</p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Put your name here"
                    required
                    className={`border rounded p-2 w-full font-medium ${
                      formik.touched.name && formik.errors.name
                        ? 'border-red-400'
                        : ''
                    }`}
                  ></input>
                  <div className="font-medium text-red-400 text-right md:mx-0 text-sm italic">
                    {formik.touched.name && formik.errors.name}
                  </div>
                </label>
              </div>

              <div className="pb-10 flex md:block">
                <label
                  for="email"
                  className="font-bold text-coffee-brown font-serif text-xl px-10 md:px-0 leading-relaxed"
                >
                  Email<p className="text-red-400 inline">*</p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Email@email.com"
                    required
                    className={`border rounded p-2 w-full font-medium ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-400'
                        : ''
                    }`}
                  ></input>
                  <div className="font-medium text-red-400 text-right md:mx-0 text-sm italic">
                    {formik.touched.email && formik.errors.email}
                  </div>
                </label>
              </div>

              <div className="pb-10 flex md:block">
                <label
                  for="subject"
                  className="font-bold text-coffee-brown font-serif text-xl px-10 md:px-0 leading-relaxed"
                >
                  Subject<p className="text-red-400 inline">*</p>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="I'm contacting about..."
                    required
                    className={`border rounded p-2 w-full font-medium ${
                      formik.touched.subject && formik.errors.subject
                        ? 'border-red-400'
                        : ''
                    }`}
                  ></input>
                  <div className="font-medium text-red-400 text-right md:mx-0 text-sm italic">
                    {formik.touched.subject && formik.errors.subject}
                  </div>
                </label>
              </div>

              <div className="pb-10 flex md:block">
                <label
                  for="message"
                  className="font-bold text-coffee-brown font-serif text-xl px-10 md:px-0 leading-relaxed"
                >
                  Message<p className="text-red-400 inline">*</p>
                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="My message is..."
                    required
                    className={`border rounded p-2 w-full font-medium ${
                      formik.touched.message && formik.errors.message
                        ? 'border-red-400'
                        : ''
                    }`}
                  />
                  <div className="font-medium text-red-400 text-right md:mx-0 text-sm italic">
                    {formik.touched.message && formik.errors.message}
                  </div>
                </label>
              </div>

              <button
                type="submit"
                className="bg-bean hover:bg-coffee-brown text-white font-bold py-2 px-10 rounded mb-20 ml-10 md:ml-0"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
