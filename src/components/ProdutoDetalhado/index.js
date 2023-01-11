import Botao from "../Botao"
import "./ProdutoDetalhado.css"

const ProdutoDetalhado = ({nome, preco, descricao, imagem_src, id}) => {
    return (
        <section className="produto-detalhado container">
            <h2 className="produto-detalhado__titulo" id="produto__titulo">{nome}</h2>
            <img src={imagem_src} alt="" className="produto-detalhado__imagem" id="produto__imagem" />
            <div className="produto-detalhado__info">
                <p className="produto-detalhado__preco" id="produto__preco">{preco}</p>
                <p className="produto-detalhado__descricao" id="produto__descricao">{descricao}</p>
            </div>
            <Botao tipo="carrinho">
                <span className="material-symbols-outlined produto-detalhado__carrinho-icone">shopping_cart</span>
                <span>Adicionar ao carrinho</span>
            </Botao>
        </section>
    )
}

export default ProdutoDetalhado