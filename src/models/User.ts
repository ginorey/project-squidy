export interface User {
  id: string;
  name: string;
  email: string;
  points: string;
};

export const validateUser = async (user: User): Promise<boolean> => {
  const isValid = !!user.name && !!user.email && !!user.id;

  return isValid;
};
