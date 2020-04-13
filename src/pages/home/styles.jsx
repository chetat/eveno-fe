import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
 gridContainer: {
     display: 'flex',
     margin: '5% 0',
     alignItems: 'center'
 },
 heroTextSection: {
    padding: '5%',
    backgroundColor: '#eee',
    marginRight: '5%',
    border: 'aqua',
    borderRadius: '6px'
 },
 heroImageSection: {
    position: 'relative'
},
heroTitle: {
    fontWeight: '700',
    fontSize: '3rem',
    fontFamily: 'Rubik'
}
}));

export default styles;

