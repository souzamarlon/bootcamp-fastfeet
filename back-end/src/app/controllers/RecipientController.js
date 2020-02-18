import * as Yup from 'yup';

import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const findRecipient = req.query.q;

    if (findRecipient === null || findRecipient === undefined) {
      const recipientData = await Recipient.findAll();

      return res.json(recipientData);
    }

    const recipientName = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: `${findRecipient}%`,
        },
      },
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
}

export default new RecipientController();
