import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import useClientes from '../hooks/useClientes'

const inter = Inter({ subsets: ['latin'] })


export default function Home() { 
const { 
  cliente,
  clientes, 
  selecionarcliente, 
  excluirCliente,
  salvarCliente,
  novoCliente,
  tabelaVisivel,
  formularioVisivel,
  exibirTabela


 } =useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `
    }>
      
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ?(
          <>
           <div className='flex justify-end'>
            <Botao cor='green'  
                   className='mb-4'
                   onClick={novoCliente}>
                      Novo Cliente
            </Botao>
            </div>
              
            <Tabela clientes={clientes} 
                    clienteSelecionado={selecionarcliente} 
                    clienteExcluido={excluirCliente}>

            </Tabela>
            
          </>
           
        ):
        (
          <Formulario cliente={cliente}
                       cancelado={()=> exibirTabela}
                       clienteMudou={salvarCliente}
          ></Formulario>
        )}
      
      </Layout>
   
      
      
    </div>
  )
}
