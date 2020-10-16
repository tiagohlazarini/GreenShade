//cSpell:Ignore descricao
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import DeleteIcon from '@material-ui/icons/DeleteForeverTwoTone'
import EditIcon from '@material-ui/icons/EditTwoTone'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(theme => ({
    select:{
        marginBottom: theme.spacing(2)
    },
    botao: {
        marginTop: theme.spacing(2)
    }
  }))
    


export default function Tarefas() {
    const classes = useStyles()
    const [tarefas, setTarefas] = useState([])
    const valorInicial = { id: '', tipo: '', descricao: '', dataFim: '' }
    const [tarefa, setTarefa] = useState(valorInicial)
    const [editando, setEditando] = useState(false)
    const hoje = new Date().toISOString().slice(0,10)

    useEffect(() => {
        setTarefas(JSON.parse(localStorage.getItem("tarefas")) || [])
    }, []);

    useEffect(() => {
        function salvaDados() {
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
        }
        salvaDados()
    }, [tarefas]);


    const mudaAtributo = event => {
        const { name, value } = event.target
        setTarefa({ ...tarefa, [name]: value })
    }
    const apagaRegistro = id => {       
        let index = tarefas.map((tarefa) => tarefa.id).indexOf(id);
        if (index > -1) {
            tarefas.splice(index, 1) //o 1o parâmetro é o índice do array e o segundo o número de itens que serão removidos
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }
    }


    function salvaRegistro(event) {
        event.preventDefault()//Não recarrega o formulário
        if (editando) {
            apagaRegistro(tarefa.id)
        }
        setTarefa({ id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, dataFim: tarefa.dataFim })
        setTarefas([...tarefas, tarefa])
        setTarefa(valorInicial) //limpa os campos
        setEditando(false)
    }

  

    function converteData(data){
        return new Date(data).toLocaleDateString('pt-BR',{timeZone: 'UTC'})
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                        <Typography
                            component="h1"
                            align="center"
                        >Cadastro de Tarefas </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="id"
                            label="Código da Tarefa"
                            name="id"
                            autoFocus
                            value={tarefa.id}
                            disabled={editando}
                            onChange={mudaAtributo}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="descricao"
                            label="Descrição da Tarefa"
                            name="descricao"
                            value={tarefa.descricao}
                            onChange={mudaAtributo}
                        />
                        <FormControl fullWidth={true}>
                            <InputLabel id="tipo">Tipo da Tarefa</InputLabel>
                            <Select
                                className={classes.select}
                                labelId="tipo"
                                id="tipo"
                                value={tarefa.tipo}
                                required
                                onChange={e => setTarefa({ ...tarefa, tipo: e.target.value })}
                            >
                                <MenuItem value="pessoal">Pessoal</MenuItem>
                                <MenuItem value="trabalho">Trabalho</MenuItem>
                                <MenuItem value="faculdade">Faculdade</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="dataFim"
                            label="Data Final"
                            name="dataFim"
                            type="date"
                            value={tarefa.dataFim}
                            onChange={mudaAtributo}
                            inputProps={{ min: hoje }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.botao}
                        >
                            <SaveIcon /> Salvar
          </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Relação de Tarefas   ">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Código</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell align="right">Data Final</TableCell>
                                    <TableCell>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tarefas.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell>{t.id}</TableCell>
                                        <TableCell>{t.tipo}</TableCell>
                                        <TableCell>{t.descricao}</TableCell>
                                        <TableCell align="right">{converteData(t.dataFim)}</TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon />}
                                                onClick={() => apagaRegistro(t.id)}
                                                variant="outlined" color="secondary">Apagar</Button>
                                            <Button startIcon={<EditIcon />}
                                                onClick={() => {
                                                    setTarefa(t)
                                                    setEditando(true)
                                                }}
                                                variant="outlined" color="primary">Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {tarefas.length === 0 &&
                                <Typography 
                                component="h3"
                            align="center">Não existe ainda nenhuma tarefa cadastrada!</Typography>
                                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}