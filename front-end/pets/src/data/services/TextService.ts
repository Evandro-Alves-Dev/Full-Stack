export const TextService = {
    LimitarTexto(texto: string, tamanhoMaximo: number): string {
        if (texto.length > tamanhoMaximo){
            return texto.slice(0, tamanhoMaximo) + "...";
        }
        return texto;       
    }
}