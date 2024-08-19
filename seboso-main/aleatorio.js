const nomes = ["Gilberto", "Edenilson", "Alberto", "Jennifer", "Luana", "Gersom", "Nicolas" ];





export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}