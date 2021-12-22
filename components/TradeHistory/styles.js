import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  upperTable:{
    backgroundColor:'#E0E0E0',
    padding: '8px',
  },
  tableHead:{
    backgroundColor:'#E5CBFF',
    display: 'flex',
    gap: '40px',
    padding: '10px 40px 10px 5px',
    '& div':{
      width:'7rem',
      fontWeight: '700',
    },
    '& h4':{
      width:'3rem',
      fontWeight: '700',
    }
  },
  tableColumnLower:{
    display: 'flex',
    gap: '40px',
    padding: '30px 10px 10px 10px',
    // justifyContent: 'space-evenly',
    backgroundColor:'white',
    borderBottom: '1px solid black',
    '& p':{
      width:'3rem',
      fontWeight: '600',
    },
    '& div':{
      width:'7rem',
      fontWeight: '600',
    }
  },
  textPurple: {
    color:'#340A6B',
  },
  textGreen: {
    color:'#00BB50',
  },
  textRed: {
    color:'#FF0000',
  },
  text2: {
    color:'#340A6B',
    fontWeight: '700',
    marginBottom: '10px'
  },
  heading1:{
    fontWeight: '700',
  },
}))