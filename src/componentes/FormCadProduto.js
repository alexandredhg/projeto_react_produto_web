import { useState } from "react";
import useProduto from "../hooks/useProduto";

const FormCadProduto = ({ adicionar_produto }) => {
  const [input_nomeProduto, setInput_nomeProduto] = useState("");
  const [input_valorProduto, setInput_valorProduto] = useState("");

  const { exibirMensagem } = useProduto();

  const handle_buttonClick_add_produto = () => {
    if (!input_nomeProduto || !input_valorProduto) {
      exibirMensagem("red", "Preencha os campos!");
      return;
    }

    // Agora só nome e valor, id é automático
    adicionar_produto(input_nomeProduto, input_valorProduto);

    setInput_nomeProduto("");
    setInput_valorProduto("");
  };

  return (
    <>
      <div id="divMensagem" role="alert" aria-live="assertive"></div>

      <div>        
        {/* NOME */}
        <h2 className="h2">
          Nome do Produto: &nbsp;
          <input
            type="text"
            role="group"
            aria-label="Nome do produto listado"
            value={input_nomeProduto}
            tabIndex={1}
            style={{ width: "80%", height: "2.5rem", backgroundColor: "white", 
              border:"2px solid black",   
              textAlign: "center", fontSize: "1.5rem", fontFamily: "arial" 
            }}
            placeholder="Digite o Nome do produto"
            onChange={(e) => setInput_nomeProduto(e.target.value)}
          />
        </h2>
      </div>

      <div>

        {/* VALOR */}
        <h2 className="h2"
            tabIndex={1}
        >
          Valor do Produto: &nbsp;
          <input
            type="number"
            role="group"
            aria-label="Valor do produto listado"
            value={input_valorProduto}
            tabIndex={1}
            style={{ width: "80%", height: "2.5rem", backgroundColor: "white", 
              border:"2px solid black",  
              textAlign: "center", fontSize: "1.5rem", fontFamily: "arial" 
            }}
            placeholder="Digite o Valor do produto"
            onChange={(campo) => setInput_valorProduto(campo.target.value)}
          />
        </h2>
      </div>

      <div>
        <button 
        className="btn-Adicionar"
        tabIndex={1} 
        onClick={handle_buttonClick_add_produto}
        >
          Adicionar Produto
        </button>

      </div>
    </>
  );
};

export default FormCadProduto;

