export default function Exercicio2 ({altura,peso})
{
let imc= peso/(altura*altura);
return (
    <div>
        Uma pessoa com {peso} kg e {altura} tem de {imc}.
    </div>
)
}


