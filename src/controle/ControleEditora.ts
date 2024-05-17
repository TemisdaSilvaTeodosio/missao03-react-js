import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Darkside' },
  { codEditora: 2, nome: 'Aleph' },
  { codEditora: 3, nome: 'Matin Claret' },
  { codEditora: 4, nome: 'HarperCollins' },
  { codEditora: 5, nome: 'Arqueiro' },
];

class ControleEditora {
  //retorna todas as editoras
  getEditora(): Array<Editora> {
    return editoras;
  }

  //retorna o nome da editora
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditora