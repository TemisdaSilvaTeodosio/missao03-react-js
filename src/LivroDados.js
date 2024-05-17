import  { useState } from 'react';
import { ControleLivro } from './controle/ControleLivros'
import  ControleEditora  from "./controle/ControleEditora";
import { useNavigate } from 'react-router-dom';

//instanciar os controladores
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();


const LivroDados = () => {
    //vetor de opções das editoras
    const opcoes = controleEditora.getEditora().map(editora => ({
        value: editora.codEditora,
        text: editora.nome,
    }))

    //propriedades de estado
    const [titulo, setTitulo] = useState('') 
    const [resumo, setResumo] = useState('') 
    const [autores, setAutores] = useState('')
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : '') 
    const navigate = useNavigate()

    //combo box
    const tratarCombo = (event) =>{
        setCodEditora(Number(event.target.value));
    }

    //incluir um novo livro
    const incluir = (event) =>{
        event.preventDefault()
        const novoLivro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n')
        }
        controleLivro.incluir(novoLivro);
        navigate('/')
    }

    return (
        <main>
            <div className='container'>
                <h1>Dados do livro</h1>
                <form onSubmit={incluir}>
                    <div className='form-group'>
                        <label htmlFor="titulo">Titulo</label>
                        <input type='text' className='form-control' id='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='resumo'>Resumo</label>
                        <textarea className='form-control' id='resumo' value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='autores'>Autores (1 por linha)</label>
                        <textarea className='form-control' id='autores' value={autores} onChange={(e) => setAutores(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='editora'>Editora</label>
                        <select className='form-control' id= 'editora' value={codEditora} onChange={tratarCombo}>
                            {opcoes.map(opcao => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                
                            ))}
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary'>Incluir</button>
                </form>
            </div>
        </main>
    );

}

export default LivroDados