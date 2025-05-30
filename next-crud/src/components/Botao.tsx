interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray' | 'red'
    className?: string
    children: any
    onClick?: ()=> void
}


export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray' 
    return (
        <button onClick={props.onClick} className={`
         bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
         text-white rounded-md px-4 py-2    
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}