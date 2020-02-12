import * as Yup from 'yup';

import Package from '../models/Package';

class PackageController {
  async index(req, res) {
    const deliverymanId = req.params.id;

    if (deliverymanId === null || deliverymanId === undefined) {
      const packageData = await Package.findAll();

      return res.json(packageData);
    }
    const deliverymanData = await Package.findAll({
      where: {
        deliveryman_id: deliverymanId,
      },
    });

    return res.json(deliverymanData);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // TODO
    // Quando a encomenda é cadastrada para um entregador, o entregador recebe um e-mail com detalhes da encomenda,
    // com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.
    const packageFields = req.body;

    return res.json(await Package.create(packageFields));
  }

  async update(req, res) {
    const packageId = req.params.id;
    const packageData = await Package.findByPk(packageId);

    const packageFields = req.body;

    return res.json(await packageData.update(packageFields));
  }

  async delete(req, res) {
    const packageId = req.params.id;
    const packageData = await Package.findByPk(packageId);

    return res.json(await packageData.destroy());
  }
}

export default new PackageController();
