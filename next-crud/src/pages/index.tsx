import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const[visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    useEffect( obterTodos,[])

  
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        setVisivel('tabela')
      })
    }
  async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente)
    setVisivel('form')
  }


  async function clienteExcluido(cliente:Cliente) {
    await repo.excluir(cliente)
    obterTodos()
    
  }

  const novoCliente = () => {
    repo.salvar(cliente)
    setVisivel('form')
    
  }




  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `
    }>
      
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela'? (
          <>
           <div className='flex justify-end'>
            <Botao cor='green'  
                   className='mb-4'
                   onClick={novoCliente}>
                      Novo Cliente
            </Botao>
            </div>
              
            <Tabela clientes={clientes} 
                    clienteSelecionado={clienteSelecionado} 
                    clienteExcluido={clienteExcluido}>

            </Tabela>
            
          </>
           
        ):
        (
          <Formulario cliente={cliente}
                       cancelado={()=> setVisivel('tabela')}
                       clienteMudou={salvarCliente}
          ></Formulario>
        )}
      
      </Layout>
   
      
      
    </div>
  )
}
