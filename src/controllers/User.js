import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['nome', 'email', 'id'] });
      return res.status(200).json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      if (!users) {
        return res.status(404).json({ erros: ['Usuário não existe'] });
      }
      const { id, nome, email } = users;

      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ erros: ['Usuário não existe'] });
      }
      const newData = await user.update(req.body);
      const { id, nome, email } = newData;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não existe'] });
      }
      await user.destroy();
      return res.json({ message: 'Apagado com sucesso' });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}
export default new UserController();
