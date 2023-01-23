import Joi from 'joi';

export const User = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  emailVerifiedToken: Joi.boolean().required(),
});

export const UpdateUser = Joi.object({
  email: Joi.string().email(),
  password: Joi.string(),
  emailVerifiedToken: Joi.boolean(),
});

export const CheckToken = Joi.object({
  email: Joi.string().email().required(),
  token: Joi.string().required(),
});

export type UserType = {
  email?: string;
  password?: string;
  isMember?: boolean;
};
