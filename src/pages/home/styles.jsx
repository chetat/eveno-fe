import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
 heroGridContainer: {
     margin: '5% 0',
     alignItems: 'center'
 },
 heroImageSection: {
    position: 'relative',
},
heroTitle: {
    color: '#f8f',
    display: 'flex',
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
        fontSize:'2.5rem'
      },
    justifyContent: 'center'
},
heroBtn: {
 background: 'linear-gradient(45deg, #3f51b5 30%, #Ff51b5 90%)',
 borderRadius: 6,
 borderColor: '#F24578',
 color: 'white',
},
subhero: {
    fontSize: '2.5rem'
},
subheroSpan: {
    color: '#F8F'
},
heroImage: {
    width: '100%'
},
heroText:{
    textAlign: 'center'
}
})
);

export default styles;
