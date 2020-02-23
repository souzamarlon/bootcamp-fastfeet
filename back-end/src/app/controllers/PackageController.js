import * as Yup from 'yup';

import { Op } from 'sequelize';
import Queue from '../../lib/Queue';
import PackageMail from '../jobs/PackageMail';
import PackageCancelledMail from '../jobs/PackageCancelledMail';

import Package from '../models/Package';
import Recipient from '../models/Recipient';
import Deliverer from '../models/Deliverer';
import File from '../models/File';

class PackageController {
  async index(req, res) {
    const findPackage = req.query.q;

    if (findPackage === null || findPackage === undefined) {
      const packageData = await Package.findAll({
        attributes: [
          'id',
          'signature_id',
          'product',
          'recipient_id',
          'deliveryman_id',
          'canceled_at',
          'start_date',
          'end_date',
        ],

        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: ['id', 'name', 'state', 'city'],
          },
          {
            model: Deliverer,
            as: 'deliveryman',
            attributes: ['id', 'name', 'avatar_id'],
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['id', 'path', 'url'],
              },
            ],
          },
          {
            model: File,
            as: 'signature',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      return res.json(packageData);
    }

    const packageName = await Package.findAll({
      where: {
        product: { [Op.iLike]: `${findPackage}%` },
      },
      attributes: [
        'id',
        'signature_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'state', 'city'],
        },
        {
          model: Deliverer,
          as: 'deliveryman',
          attributes: ['id', 'name', 'avatar_id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(packageName);
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

    // TODO - I need to test
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
    const packageData = await Package.findByPk(req.params.id, {
      include: [
        {
          model: Deliverer,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    // console.log(packageData);
    packageData.canceled_at = new Date();

    // TODO - Testing
    // Quando uma encomenda for cancelada, o entregador deve receber um e-mail informando-o sobre o cancelamento.

    await packageData.save();

    await Queue.add(PackageCancelledMail.key, {
      product: packageData.product,
      name: packageData.deliveryman.name,
      email: packageData.deliveryman.email,
    });

    return res.json(packageData);
  }
}

export default new PackageController();
