import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  // async index(req, res) {}

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
}

export default new RecipientController();
