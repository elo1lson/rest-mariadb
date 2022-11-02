import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(e => e.message) });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);

    } catch (e) {
      return res.json(null);

    }
  }
  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      if (!users) {
        return res.status(404).json({ erros: ['Usuário não existe'] })
      };

      return res.status(200).json(users);

    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(e => e.message) });

    }
  }
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['Id não enviado'],
        })
      };

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ erros: ['Usuário não existe'] });
      };
      const newData = await user.update(req.body);
      return res.json(newData);

    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(e => e.message) });

    }
  }
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          erros: ['Id não enviado'],
        })
      };

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ erros: ['Usuário não existe'] });
      };
      await user.destroy();
      return res.json({ message: 'Apagado com sucesso' });

    } catch (e) {
      return res.status(400).json({ errors: e.errors.map(e => e.message) });

    }
  }
}
export default new UserController();
