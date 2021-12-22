import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  searchContainer:{
    backgroundColor:'#E0E0E0',
    padding: '8px',
    margin: '8px 0px',
    height: '35px',
    color: '#949494',
    fontSize: 'small',
    fontWeight: '300',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  outerTableContainer:{
    backgroundColor:'#E0E0E0',
    padding: '8px',
  },
  innerTableContainer:{
    backgroundColor:'#F1EAF9',
  },
  tableColumn:{
    display: 'flex',
    gap: '2rem',
    padding: '10px 10px 10px 60px',
    border: '1px solid black',
    backgroundColor:'white',
  },
  tableColumnLower:{
    display: 'flex',
    gap: '4rem',
    padding: '5px 40px 0px 20px',
    // justifyContent: 'space-evenly',
    backgroundColor:'white',
    marginBottom: '5px',
    '& p':{
      width:'2rem',
    },
    '& div':{
      width:'7rem',
    }
  },
  text2: {
    color:'#340A6B',
    fontWeight: '700',
    marginBottom: '10px'
  },
}))