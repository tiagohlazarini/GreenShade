// cSpell:Ignore Cartao
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'

const useStyles = makeStyles(() => ({
  skeleton: {
    zIndex: 0,
    position: 'absolute'
  },
  cartao: {
    width: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  media: {
    height: 500,
  },
 
}))

export default function Cartao() {
  const classes = useStyles();
  
  return (
    <>
    <Skeleton variant="rect" width='100%' height={500} animation="wave" className={classes.skeleton} />
    <Card className={classes.cartao}>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/featured/?landscape"
        title="Seja bem vindo!"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         A Empresa Delta está localizada em Itu/SP...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="Compartilhar">
          <ShareIcon />
        </IconButton>     
      </CardActions>
    </Card>
    </>
  )
}
