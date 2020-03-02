import * as Yup from 'yup';

import { Op } from 'sequelize';

import Deliverer from '../models/Deliverer';
import File from '../models/File';

class DelivererController {
  async index(req, res) {
    const findDeliverer = req.query.q;

    if (findDeliverer === null || findDeliverer === undefined) {
      const delivererData = await Deliverer.findAll({
        attributes: ['id', 'name', 'email', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'name', 'path', 'url'],
          },
        ],
      });

      return res.json(delivererData);
    }

    const delivererName = await Deliverer.findAll({
      where: {
        name: {
          [Op.iLike]: `${findDeliverer}%`,
        },
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    return res.json(delivererName);
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
