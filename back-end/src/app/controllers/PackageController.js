import * as Yup from 'yup';

import Queue from '../../lib/Queue';
import PackageMail from '../jobs/PackageMail';

import Package from '../models/Package';
import Deliverer from '../models/Deliverer';

class PackageController {
  async index(req, res) {
    const packageData = await Package.findAll();

    return res.json(packageData);
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

    const { recipient_id, deliveryman_id, product } = req.body;

    // TODO
    // Quando a encomenda é cadastrada para um entregador, o entregador recebe um e-mail com detalhes da encomenda,
    // com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.

    const { name, email } = await Deliverer.findByPk(deliveryman_id);

    await Queue.add(PackageMail.key, {
      name,
      email,
      product,
    });

    return res.json(
      await Package.create({ recipient_id, deliveryman_id, product })
    );
  }

  async update(req, res) {
    const packageData = await Package.findByPk(req.params.id);

    const packageFields = req.body;

    return res.json(await packageData.update(packageFields));
  }

  async delete(req, res) {
    const packageData = await Package.findByPk(req.params.id);

    packageData.canceled_at = new Date();

    // TODO
    // Quando uma encomenda for cancelada, o entregador deve receber um e-mail informando-o sobre o cancelamento.

    await packageData.save();

    return res.json(packageData);
  }
}

export default new PackageController();
