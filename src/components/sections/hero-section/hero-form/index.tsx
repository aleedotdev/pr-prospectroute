import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormValues } from "@/types";
import { validationSchema } from "@/formik/validations";
import { employeeOptions } from "@/constants";
import { initialValues } from "@/formik/initial-values";

const PricingForm = () => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    setTimeout(() => {
      console.log("Form submitted:", values);
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md bg-white/60 md:p-5 p-3 rounded-xl">
      <div className="bg-card rounded-xl shadow-card bg-white md:p-8 p-4">
        <h1 className="text-2xl font-bold text-card-foreground pb-1">
          Want to see pricing?
        </h1>
        <h2 className="text-2xl font-bold text-card-foreground pb-8">
          We will email it!
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  First name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Type..."
                  className={`form-input border-1 text-sm border-light-blue p-3 rounded-lg w-full ${
                    errors.firstName && touched.firstName ? "form-input-error" : ""
                  }`}
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Type..."
                  className={`form-input border-1 text-sm border-light-blue p-3 rounded-lg w-full ${
                    errors.email && touched.email ? "form-input-error" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                className="mt-1 text-sm text-red-500"

                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Mobile (used as password)
                </label>
                <Field
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Type..."
                  className={`form-input  border-1 text-sm border-light-blue p-3 rounded-lg w-full ${
                    errors.mobile && touched.mobile ? "form-input-error" : ""
                  }`}
                />
                <ErrorMessage
                  name="mobile"
                  component="p"
                  className="mt-1 text-sm text-red-500"

                />
              </div>

              <div>
                <label
                  htmlFor="agencyEmployees"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Agency employees
                </label>
                <Field
                  as="select"
                  id="agencyEmployees"
                  name="agencyEmployees"
                  className={`form-select  border-1 text-sm border-light-blue p-3 rounded-lg w-full ${
                    errors.agencyEmployees && touched.agencyEmployees
                      ? "form-input-error"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  {employeeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="agencyEmployees"
                  component="p"
                    className="mt-1 text-sm text-red-500"
                />
              </div>
               <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="form-button mt-8 text-center bg-naval-blue text-white rounded-lg p-5 w-full"
              >
                {isSubmitting ? "Sending..." : "Send pricing!"}
              </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PricingForm;
