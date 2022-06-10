import { Logo, CabecalhoContainer, LinkContainer } from "./CabecalhoAdmin.style"
import { Link, Box } from "@mui/material";
import NextLink from "next/link";


export default function CabecalhoAdmin(){
    return (
        <CabecalhoContainer>
            <div>
                <Logo src='/imagens/logo.svg' alt='Adote um pet'/>
                <LinkContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>
                            Relatório{' '}
                            <Box 
                                component={'span'}
                                sx={{display: {sm: 'initial', xs: 'none'}}}
                            >
                            de adoção
                            </Box>
                        </a>
                    </Link>
                </LinkContainer>
            </div>
        </CabecalhoContainer>
    );
}