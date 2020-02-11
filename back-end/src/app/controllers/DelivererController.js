import * as Yup from 'yup';

import Deliverer from '../models/Deliverer';

class DelivererController {
  async index(req, res) {
    const delivererData = await Deliverer.findAll();

    return res.json(delivererData);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      avatar_id: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // TODO - Check if the email is already using for someone.

    const delivererFields = await Deliverer.create(req.body);

    return res.json(delivererFields);
  }

  async update(req, res) {
    const delivererId = req.params.id;

    const { name, email, avatar_id } = req.body;

    const delivererData = await Deliverer.findByPk(delivererId);

    return res.json(await delivererData.update({ name, email, avatar_id }));
  }

  async delete(req, res) {
    const delivererId = req.params.id;

    const delivererData = await Deliverer.findByPk(delivererId);

    return res.json(await delivererData.destroy());
  }
}

export default new DelivererController();
