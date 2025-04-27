import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const[visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('Bia', 43, '2'),
  ]

  function salvarCliente(cliente:Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  const clienteSelecionado = (cliente: Cliente) => {
    setCliente(cliente)
    setVisivel('form')
  }
  const clienteExcluido = (cliente: Cliente) => {
    console.log(cliente.nome)
    
  }

  const novoCliente = () => {
    setCliente(Cliente.vazio())
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
