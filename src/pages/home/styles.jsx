import { makeStyles } from '@material-ui/core/styles';
import image from '../../media/events_home.jpg';


const styles = makeStyles((theme) => ({
 gridContainer: {
     display: 'flex',
     margin: '5% 0',
     alignItems: 'center'
 },
 heroTextSection: {
    position: 'relative',
    padding: '20%',
    backgroundColor: '#fff5f8',
    marginRight: '5%',
    display: 'flex',
    alignSelf: 'center',
    marginTop:'5%',
    border: 'aqua',
    borderRadius: '6px'
 },
 heroImageSection: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        backgroundImage: `url(${image})`,
        backgroundColor: '#FEE'
      }
},
heroTitle: {
    fontWeight: '700',
    fontSize: '3rem',
    fontFamily: 'Rubik',
    position: 'absolute',
    left:'-10%'
}
}));

export default styles;

