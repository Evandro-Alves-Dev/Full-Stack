import { TituloStyled, SubTitulo } from "./Titulo.style";

interface TituloProps {
    titulo: String;
    subtitulo?: String | JSX.Element;
}

export default function Titulo(props: TituloProps){
    return (
        <>
        <TituloStyled>{props.titulo}</TituloStyled>
        <SubTitulo>{props.subtitulo}</SubTitulo>
        </>
    );
}