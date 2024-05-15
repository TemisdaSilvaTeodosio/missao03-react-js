import { Livro } from '../modelo/Livro';

// Definindo a variável livros como um Array<Livro> contendo ao menos três elementos
const livros: Array<Livro> = [
  {
    codigo: 1,
    titulo: 'Carmilla',
    resumo: 'A obra é narrada por Laura, jovem que vive isolada com o pai em um castelo na Estíria – região do antigo império austro-húngaro. Uma hóspede inesperada, entretanto, despertará os sentimentos amorosos da jovem Laura, ao mesmo tempo que lhe causará certo terror ao trazer de volta antigos pesadelos da infância.',
    codEditora: 1,
    autores: ['Sheridan le fanu']
  },
  {
    codigo: 2,
    titulo: 'Jurassic Park',
    resumo: 'A trama usa a teoria do caos e suas implicações filosóficas para explicar o colapso de um parque de diversões povoado por dinossauros, recriados através de engenharia genética.',
    codEditora: 2,
    autores: ['Michael Crichton ']
  },
  {
    codigo: 3,
    titulo: 'Livro C',
    resumo: 'Resumo do Livro C',
    codEditora: 3,
    autores: ['Autor C1']
  }
];

export class ControleLivro {
  // Método que retorna todos os livros
  obterLivros(): Array<Livro> {
    return livros;
  }

  // Método que inclui um novo livro
  incluir(livro: Livro): void {
    const novoCodigo = livros.length > 0 ? Math.max(...livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  // Método que exclui um livro pelo código
  excluir(codigo: number): void {
    const indice = livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      livros.splice(indice, 1);
    }
  }
}

