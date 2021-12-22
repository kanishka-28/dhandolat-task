import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  cardcontainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperTable:{
    backgroundColor:'#E0E0E0',
    padding: '8px',
  },
  tableHead:{
    backgroundColor:'#E5CBFF',
    border: '1px solid black',
    display: 'flex',
    // justifyContent: 'space-evenly',
    gap: '30px',
    padding: '10px',
    '& h4':{
      width:'6rem'
    },
  },
  tableColumn:{
    display: 'flex',
    gap: '30px',
    padding: '10px 10px 10px 10px',
    border: '1px solid black',
    backgroundColor:'white',
    '& p':{
      width:'6rem',
    },
    '& div':{
      width:'6rem',
    },
  },
  tableColumnLower:{
    display: 'flex',
    gap: '30px',
    padding: '10px 10px 10px 10px',
    // justifyContent: 'space-evenly',
    backgroundColor:'white',
    marginBottom: '5px',
    '& p':{
      width:'6rem',
      textAlign: 'center'
    },
    '& div':{
      width:'6rem',
    }
  },
  text2: {
    color:'#340A6B',
    fontWeight: '700',
    marginBottom: '10px'
  },
  btn:{
    backgroundColor: '#3AE386',
    border: 'none',
    borderRadius: '20px',
    padding: '10px',
    margin: '2px'
  }
}))