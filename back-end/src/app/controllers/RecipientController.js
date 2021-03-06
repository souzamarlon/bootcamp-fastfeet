import * as Yup from 'yup';

import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page, per_page, q: findRecipient } = req.query;

    const offset = (page - 1) * per_page;
    const limit = per_page;

    // Return all the Recipients with Offset.
    if (offset >= 0 && limit && !findRecipient) {
      const recipientData = await Recipient.findAll({
        offset,
        limit,
        order: [['id', 'ASC']],
      });

      return res.json(recipientData);
    }

    // Return all the Recipients without Offset.
    if (!findRecipient) {
      const recipientData = await Recipient.findAll({
        order: [['id', 'ASC']],
      });

      return res.json(recipientData);
    }

    // it will find all the Recipients by name.
    const recipientName = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: `${findRecipient}%`,
        },
      },
      order: [['id', 'ASC']],
    });

    return res.json(recipientName);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipientFields = await Recipient.create(req.body);

    return res.json(recipientFields);
  }

  async update(req, res) {
    const recipient_id = req.params.id;

    const { name, street, number, complement, state, city, zipcode } = req.body;

    const recipientData = await Recipient.findByPk(recipient_id);

    return res.json(
      await recipientData.update({
        name,
        street,
        number,
        complement,
        state,
        city,
        zipcode,
      })
    );
  }

  async delete(req, res) {
    const recipientId = req.params.id;

    const recipientData = await Recipient.findByPk(recipientId);

    return res.json(await recipientData.destroy());
  }
}

export default new RecipientController();
