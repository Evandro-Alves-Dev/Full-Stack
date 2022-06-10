import { NextPage } from "next";
import { usecadastro } from "../../data/hooks/pages/pets/useCadastro";
import Titulo from "../../ui/components/Titulo/Titulo";
import { Paper, Grid, Button, TextField, Snackbar } from "@mui/material";
import { textAlign } from "@mui/system";

const Cadastro: NextPage = () => {
    const {
        nome,
        historia,
        foto,
        setNome,
        setHistoria,
        setFoto,
        cadastrar,
        mensagem,
        setMensagem
    } = usecadastro();
    return (
        <div>
            <Titulo 
            titulo={'Cadastro de Pets para Adoção'}
            subtitulo={'Preencha os dados do novo Pet'}
            />
            <Paper sx={{maxWidth: 970, mx: 'auto', p: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            label ={'Nome'}
                            fullWidth
                            placeholder={"Favor informar o nome do Pet"}                        
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={historia}
                            onChange={(e) => setHistoria(e.target.value)}
                            label ={'História do Pet'}
                            fullWidth
                            multiline
                            rows={3}                                         
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={foto}
                            onChange={(e) => setFoto(e.target.value)}
                            label ={'Foto'}
                            fullWidth
                            multiline  
                            placeholder={"Favor informar a URL da foto - Exemplo: https://imagem.com.br/pet-fofo.png"}                                                                  
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{mt: 2}}
                            component ={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Enviar imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button
                            onClick={cadastrar}
                            variant={'contained'}
                            fullWidth
                            sx={{maxWidth: {md: 200}, mt: 4}}
                        >
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar 
                open={mensagem.length > 0}
                autoHideDuration={2500}
                onClose={() => setMensagem('')}
                message={mensagem}
            />
        </div>
    );    
}

export default Cadastro;