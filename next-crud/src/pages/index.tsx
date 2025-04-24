import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

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
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
      
    </div>
  )
}
