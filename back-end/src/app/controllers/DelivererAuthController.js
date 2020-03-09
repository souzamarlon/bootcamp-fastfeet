import Deliverer from '../models/Deliverer';
import File from '../models/File';

class DelivererAuthController {
  async index(req, res) {
    const { id } = req.params;

    const delivererData = await Deliverer.findOne({
      attributes: ['id', 'name', 'email', 'avatar_id', 'created_at'],
      where: {
        id,
      },
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
}

export default new DelivererAuthController();
