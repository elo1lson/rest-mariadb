import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const newAluno = await Aluno.create({
      nome: 'Eloilson',
      sobrenome: 'fontenele',
      email: 'eloilson@email.com',
      idade: 18,
      peso: 280,
      altura: 2.4,
    });

    res.json(newAluno);
  }
}

export default new Home();
