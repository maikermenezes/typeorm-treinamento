import Joi from 'joi';

export const Pessoa = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    phoneNumber: Joi.string().required(),
});

export const UpdatePessoa = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  age: Joi.number(),
  phoneNumber: Joi.string(),
});

export const CheckToken = Joi.object({
  email: Joi.string().email().required(),
  token: Joi.string().required(),
});

export type PessoaType = {
  firstName?: string;
  lastName?: string;
  age?: number;
  phoneNumber?: string;
  address?: string;
  cpf?: string; 
};
