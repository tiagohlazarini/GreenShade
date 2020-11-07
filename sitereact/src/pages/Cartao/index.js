//cSpell:Ignore cartao  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    cartao: {
        width: '100%',
       
    },
    media: {
        height: 500

    }    
});

export default function Cartao() {
    const classes = useStyles();

    return (
        
            <Card className={classes.cartao}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://source.unsplash.com/featured/?landscape,city"
                        title="Seja bem vindo!"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Nossa Missão
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A missão da Delta é com o ....
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" variant="outlined">
                        Compartilhe
        </Button>
                    <Button size="small" color="secondary" variant="outlined">
                        Saiba Mais
        </Button>
                </CardActions>
            </Card>
       
    );
}
