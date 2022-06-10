import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiService";



export function usecadastro() {
    const [nome, setNome] = useState(''),
    [historia, setHistoria] = useState(''),
    [foto, setFoto] = useState(''),
    [mensagem, setMensagem] = useState('');

    function cadastrar(){
        if( validarFormulario()) {
            ApiService.post('/pets', {
                nome,
                historia,
                foto
            })
                .then(() => {
                    limpar();
                    setMensagem('Pet Cadastrado com sucesso!')
                })
                .catch((error: AxiosError) => {
                    setMensagem(error.response?.data.message)
                })
        } else {
            setMensagem('Preencha todos os campos!')
        }
    }

    function validarFormulario(){
        return nome.length > 3 && historia.length > 20 && foto.length > 10
    }

    function limpar(){
        setNome('');
        setHistoria('');
        setFoto('');
    }

    return {
        nome,
        historia,
        foto,
        setNome,
        setHistoria,
        setFoto,
        cadastrar,
        mensagem,
        setMensagem
    }

}