import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps{
            cliente:Cliente
            cancelado?:()=> void
            clienteMudou?:(cliente: Cliente)=> void

}

export default function Formulario(props:FormularioProps){
    const id = props.cliente?.id 

    const [nome,setNome]= useState(props.cliente?.nome ?? '')
    const [idade,setIdade]= useState(props.cliente?.idade ?? 0)
    return(
        <div>
                {id ?(
                    <Entrada 
                    texto="Codigo" 
                    valor ={id}
                    somenteLeitura
                    className="mb-4"
                    />

                ):false}
                <Entrada 
                texto="Nome" 
                valor ={nome}
                valorMudou={setNome}
                className="mb-4"
                />
                <Entrada 
                texto= "Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}/>

                <div className="flex justify-end mt-7">
                    <Botao className="mr-2"
                            onClick={()=> props.clienteMudou?.(new Cliente(nome,idade,id))}>
                        {id? 'Alterar':'Salvar'} 
                    </Botao>
                    <Botao onClick={props.cancelado} cor="blue">
                        cancelar
                    </Botao>

                    
                </div>
        </div>
    )
}