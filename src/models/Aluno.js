import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 55],
            msg: ['Nome precisa ter entre 3 e 55 caracteres.'],
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 55],
            msg: ['Sobrenome precisa ter entre 3 e 55 caracteres.'],
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: ['Email já esta em uso'],
        },
        validate: {
          isEmail: {
            msg: ['Email inválido'],
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: ['Idade precisa ser um numer inteiro.'],
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: ['Peso precisa ser um numero inteiro ou de ponto flutuante.'],
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: ['Altura precisa ser um numero inteiro ou de ponto flutuante.'],
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
