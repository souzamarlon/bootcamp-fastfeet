import * as Yup from 'yup';

import { Op } from 'sequelize';

import Deliverer from '../models/Deliverer';
import File from '../models/File';

class DelivererController {
  async index(req, res) {
    const { page, per_page, q: findDeliverer } = req.query;

    const offset = (page - 1) * per_page;
    const limit = per_page;

    // Return all the deliverers with offset.
    if (offset >= 0 && limit && !findDeliverer) {
      const delivererData = await Deliverer.findAll({
        offset,
        limit,
        attributes: ['id', 'name', 'email', 'avatar_id'],
        order: [['id', 'ASC']],
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

    // Return all the deliverers without offset.
    if (!findDeliverer) {
      const delivererData = await Deliverer.findAll({
        attributes: ['id', 'name', 'email', 'avatar_id'],
        order: [['id', 'ASC']],
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

    // It will find the deliverer by his name.
    const delivererName = await Deliverer.findAll({
      where: {
        name: {
          [Op.iLike]: `${findDeliverer}%`,
        },
      },
      order: [['id', 'ASC']],
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
      avatar_id: Yup.number().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // It will receive the Deliverer email to compare if it does not have any using the same email.
    const { email } = req.body;
    const [verifyEmail] = await Deliverer.findAll({
      where: {
        email,
      },
    });

    if (verifyEmail) {
      return res
        .status(400)
        .json({ error: 'An account with this email already exists!' });
    }

    // It will Save the deliverer register data.
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
