import Mail from '../../lib/Mail';

class PackageCancelledMail {
  get key() {
    return 'PackageCancelledMail';
  }

  async handle({ data }) {
    const { name, email, product } = data;

    console.log('A fila executou!');
    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Foi cancelada a retirada do produto!',
      template: 'packageCancelled',
      context: {
        name,
        product,
      },
    });
  }
}

export default new PackageCancelledMail();
