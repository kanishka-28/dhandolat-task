import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  cardContainer:{
    width: '370px',
  },
  text: {
    color:'black',
    fontWeight: '700',
  },
  text2: {
    color:'#340A6B',
    fontWeight: '700',
  },
  upperSection:{
    color:'black',
    fontWeight: '700',
    backgroundColor:'#DACFE4',
    margin: '0px 0px 0px 0px',
    padding: '4px 20px',
  },
  middleSection:{
    backgroundColor:'#F5F1F8',
    color:'black',
    fontWeight: '800',
    margin: '0px',
    padding: '10px 20px'
  },
  lowerSection:{
    // height : '280px',
    margin: '0px',
    padding: '20px',
    backgroundColor:'#DACFE4',
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftLowerSection:{
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  rightLowerSection:{
    display: 'flex',
    flexDirection: 'column',
    gap: '61px'
  },
}))