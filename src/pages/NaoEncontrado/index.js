// cSpell:Ignore botao
import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfiedTwoTone';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(10),
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    botao: {
        marginTop: theme.spacing(10)
    }
}
)
)

export default function NaoEncontrado() {
    const classes = useStyles() //estilos do Material-UI
    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h3" color="primary">
                    <SentimentVeryDissatisfiedIcon fontSize='large' /> Página não encontrada!
            </Typography>
                <Button
                    href="/"
                    variant="contained"
                    color="primary"
                    className={classes.botao}
                >
                    Voltar para o início
                </Button>
            </Paper>
        </>
    )
}