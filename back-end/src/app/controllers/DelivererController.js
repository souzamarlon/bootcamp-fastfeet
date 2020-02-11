import * as Yup from 'yup';

import Deliverer from '../models/Deliverer';

class DelivererController {
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

    const delivererFields = await Deliverer.create(req.body);

    console.log(delivererFields);

    return res.json(delivererFields);
  }
}

export default new DelivererController();
