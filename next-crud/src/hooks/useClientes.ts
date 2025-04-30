import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import Cliente from "../core/Cliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()
      const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
      const [clientes, setClientes] = useState<Cliente[]>([])
      
      const {formularioVisivel,tabelaVisivel,exibirFormulario,exibirTabela} = useTabelaOuForm()
    
        useEffect( obterTodos,[])
    
      
        function obterTodos(){
          repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela
          })
        }
      async function salvarCliente(cliente:Cliente){
        await repo.salvar(cliente)
        obterTodos()
      }
    
      const selecionarcliente = (cliente: Cliente) => {
        setCliente(cliente)
        exibirFormulario
      }
    
    
      async function excluirCliente(cliente:Cliente) {
        await repo.excluir(cliente)
        obterTodos()
        
      }
    
      const novoCliente = () => {
        repo.salvar(cliente)
       exibirFormulario
        
      }   


      return {  
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarcliente,
        obterTodos,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela
      }
    
    
}