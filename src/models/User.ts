import * as yup from 'yup';

export interface User {
  id: string;
  name: string;
  email: string;
  points: string;
};

export const validateUser = async (user: User): Promise<boolean> => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return schema.isValid(user);
};
