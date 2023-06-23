import * as yup from 'yup';

export const endCustomerValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
  company_id: yup.string().nullable(),
});
