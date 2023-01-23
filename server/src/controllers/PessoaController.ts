import { Request, Response } from 'express';
import { Pessoa } from '../models';
import { Citi, Crud } from '../global'

export default class PessoaController implements Crud {

    async create(request: Request, response: Response){
        const {firstName, lastName, age} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, age);
        if(isAnyUndefined) return response.status(400).send();

        const newPessoa = { firstName, lastName, age };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Pessoa, newPessoa);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Pessoa);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: pessoaFound, message } = await Citi.findByID(Pessoa, id); 
           
        if(!pessoaFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Pessoa, pessoaFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {firstName, lastName } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(firstName, lastName, id);
        if(isAnyUndefined) return response.status(400).send();

        const pessoaWithUpdatedValues = { firstName, lastName };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Pessoa, id, pessoaWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}