import * as Yup from 'yup';

import { Op } from 'sequelize';
import Queue from '../../lib/Queue';
import PackageMail from '../jobs/PackageMail';

import Package from '../models/Package';
import Recipient from '../models/Recipient';
import Deliverer from '../models/Deliverer';
import File from '../models/File';

class PackageController {
  async index(req, res) {
    const { page, per_page, q: findPackage } = req.query;

    const offset = (page - 1) * per_page;
    const limit = per_page;

    if (offset >= 0 && limit && !findPackage) {
      const packageData = await Package.findAll({
        offset,
        limit,
        order: [['id', 'ASC']],
        attributes: [
          'id',
          'signature_id',
          'product',
          'recipient_id',
          'deliveryman_id',
          'canceled_at',
          'start_date',
          'end_date',
          'created_at',
        ],
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'name',
              'street',
              'number',
              'city',
              'state',
              'zipcode',
            ],
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

    if (findPackage === null || findPackage === undefined) {
      const packageData = await Package.findAll({
        order: [['id', 'ASC']],
        attributes: [
          'id',
          'signature_id',
          'product',
          'recipient_id',
          'deliveryman_id',
          'canceled_at',
          'start_date',
          'end_date',
          'created_at',
        ],

        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'name',
              'street',
              'number',
              'city',
              'state',
              'zipcode',
            ],
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
      order: [['id', 'ASC']],
      offset,
      limit,
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
        'created_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['id', 'name', 'street', 'city', 'state', 'zipcode'],
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
    const packageId = req.params.id;

    const packageData = await Package.findByPk(packageId);

    return res.json(await packageData.destroy());
  }
}

export default new PackageController();
