import { useLocation, useNavigate } from "react-router-dom";
import "./css/Produto.css";
import { useState } from "react";
import useProduto from "../hooks/useProduto";

const TelaProdutoDetalhes = () => {
  const { alterar_produto } = useProduto();
  const location = useLocation();
  const produto = location.state || {};
  const navigate = useNavigate();
  const [input_nome, setInput_nome] = useState(produto.nome);
  const [input_valor, setInput_valor] = useState(produto.valor);


  const handle_buttonClick_alterar = () => {
    const produto_editado = {
      ...produto,

      nome: input_nome,
      valor: input_valor
    };

    alterar_produto(produto_editado);
    navigate("/");
  };

  const handle_buttonClick_voltar = () => {
    navigate(-1);
  };

  return (
    <>
      <h1 className="h1" tabIndex={1}>
        Detalhe dos rodutos Listados
      </h1>

      <div className="box">
        <div style={{ textAlign: "left", padding: "5px" }}>
          <h2 className="h2"
            tabIndex={1}
          >
            ID: {produto.id}
          </h2>
        </div>

        <div>
          <h2 className="h2"
            tabIndex={1}
          >
            Nome do Produto: &nbsp;
            <input
            className="input"
              type="text"
              size={50}
              role="group"
              aria-label="nome do produto listado"
              value={input_nome}
              tabIndex={1}
              /*style={{ width: "80%", height: "2.5rem", backgroundColor: "white", 
                border:"2px solid black", fontWeight: "bold", color: "black",  
                textAlign: "center", fontSize: "1.5rem", fontFamily: "arial" 
              }}*/
              onChange={(campo) => setInput_nome(campo.target.value)}
            />
          </h2>
        </div>

        <div >
          <h2 className="h2"
            tabIndex={1}
          >
            Valor do Produto: &nbsp;
            <input
              className="input"
              type="number"
              step="0.01"
              role="group"
              aria-label="valor do produto"
              value={input_valor}
              tabIndex={1}
              /*style={{ width: "80%", height: "2.5rem", backgroundColor: "white", 
                border:"2px solid black", fontWeight: "bold", color: "black",  
                textAlign: "center", fontSize: "1.5rem", fontFamily: "arial" 
              }}*/
              onChange={(campo) => setInput_valor(campo.target.value)}
            />
          </h2>
        </div>

        &nbsp; 

        <div className="grid-botoes  margin">
          <button
          className="btn-Alterar"
            onClick={() => {
              handle_buttonClick_alterar();
            }}
          >
            Alterar Produto
          </button>

          &nbsp;

          <button
          className="btn-Voltar"
            onClick={() => {
              handle_buttonClick_voltar();
            }}
          >
            Voltar
          </button>
        </div>

      </div>
    </>
  );
};

export default TelaProdutoDetalhes;

