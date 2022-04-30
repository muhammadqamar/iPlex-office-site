import React from "react"
import { Formik } from "formik"
import "./style/form.scss"

const Contactform = () => {
  return (
    <>
      <div className="iplex-contact-container">
        <h1 className="bg-heading">Contact Us</h1>
        <div className="form-section">
          <Formik
            initialValues={{ name: "", email: "", option: "", file: "" }}
            validate={values => {
              const errors = {}
              if (!values.name) {
                errors.name = "Please Enter Name"
              }
              if (!values.option) {
                errors.option = "Please Choose An Option"
              }
              if (!values.file) {
                errors.file = "Please upload the file"
              }
              if (!values.email) {
                errors.email = "Please Enter Email"
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address"
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-box">
                  <div className="form-bx1">
                    <label className="main-hd" for="Myname">
                      My name is
                    </label>
                    <div className="txt-eml">
                      <input
                        className="input"
                        type="name"
                        name="name"
                        id="Myname"
                        placeholder="Your Name*"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <p className="error">
                        {errors.name && touched.name && errors.name}
                      </p>
                    </div>
                    <label className="main-hd" for="Myemail">
                      My email is
                    </label>
                    <div className="txt-eml">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        id="Myemail"
                        placeholder="Your Email*"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p className="error">
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                  </div>
                  <div className="form-bx2">
                    <label className="main-hd" for="mychoice">
                      What position are you looking for?
                    </label>
                    <div className="pst-fle">
                      <select
                        className="choice"
                        name="option"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="Mychoice"
                        value={values.option}
                      >
                        <option value="Your Position as" selected>
                          Your Position as{" "}
                        </option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                        <option value="Project Manager">Project Manager</option>
                      </select>
                      <p className="error">
                        {errors.option && touched.option && errors.option}
                      </p>
                    </div>
                    <label className="main-hd" for="Myfile">
                      My Resume is
                    </label>
                    <div className="pst-fle">
                      <input
                        className="input"
                        name="file"
                        type="file"
                        id="Myfile"
                      />
                      <p className="file-para">
                        Support files word and pdf, max size to upload 5mb
                      </p>
                      <p className="error">
                        {errors.file && touched.file && errors.file}
                      </p>
                    </div>
                  </div>
                </div>
                <label className="main-hd" for="textarea">
                  Message
                </label>
                <div className="about">
                  <textarea
                    className="area"
                    type="text"
                    placeholder="Your typing here..."
                  ></textarea>
                </div>
                <button
                  className="btn-form"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Contactform
