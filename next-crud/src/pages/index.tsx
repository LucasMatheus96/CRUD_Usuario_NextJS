import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('Bia', 43, '2'),
  ]

  
  const clienteSelecionado = (cliente: Cliente) => {
    console.log(cliente.nome)
  }
  const clienteExcluido = (cliente: Cliente) => {
    console.log(cliente.nome)
  }
  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `
    }>
      <Layout titulo="Cadastro Simples">
        <div className='flex justify-end'>
        <Botao cor='green'  className='mb-4'>Novo Cliente</Botao>
        </div>
          
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        <Formulario cliente={clientes[0]}></Formulario>
      </Layout>
      
    </div>
  )
}
