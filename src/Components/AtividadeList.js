import Atividade from './Atividade';

export default function AtividadesList(props) {
    return (
        <div>
            <div className="mt-3">
                {props.atividades.map((ativ) => (
                    <Atividade
                        key={ativ.id}
                        ativ={ativ}
                        deletarAtividade={props.deletarAtividade}
                        pegarAtividade={props.pegarAtividade}
                    />
                ))}
            </div>
        </div>
    )
}