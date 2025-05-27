export default function Exercicio2 ({temperatura})
{
    let resultado = (temperatura - 32) * 5/9
   
    return(
        <div>
            <p>A temperatura em graus Celsius é {resultado} °C</p>
        </div>
    );
}