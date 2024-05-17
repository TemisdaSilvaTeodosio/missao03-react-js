import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import  ControleEditora  from './controle/ControleEditora';

// Instanciar os controladores
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

// Componente auxiliar LinhaLivro
const LinhaLivro = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td style={{width:'10%'}}>{livro.codigo}</td>
      <td style={{ width: '20%' , wordWrap: 'break-word'}}>{livro.titulo}</td>
      <td style={{ width: '30%', wordWrap: 'break-word' }}>{livro.resumo}</td>
      <td style={{ width: '25%' }}>
        <ul className='list-unstyled' style={{ marginBottom: 0 }}>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td style={{ width: '15%' }}>{nomeEditora}</td>
      <td style={{ width: '10%' }}>
        <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};

// Componente principal LivroLista
const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main>
      <div className='container-fluid'>
        <h1>Catálogo de livros</h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' style={{ width: '10%' }}>Id</th>
              <th scope='col' style={{ width: '20%' }}>Título</th>
              <th scope='col' style={{ width: '30%' }}>Resumo</th>
              <th scope='col' style={{ width: '25%' }}>Autores</th>
              <th scope='col' style={{ width: '15%' }}>Editora</th>
              <th scope='col' style={{ width: '10%' }}>Opção</th>
            </tr>
          </thead>
          <tbody className='container_main'>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default LivroLista