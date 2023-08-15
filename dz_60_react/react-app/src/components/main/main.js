import './main.css';
import logo from '../../img/logo.png';
import Cards from './company-advantage';

function Container(props) {
    return(
        <div className={`container ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    )
}

export default function Main() {
    const pictureLogo = <img src={logo} alt="logo" />;
    const infoCompany = `Each company, of course, approaches the design of the "About Us" page in its own way. 
        It is even called differently by everyone: "About the company", "About the store", etc. But, as practice shows, 
        most approach the design of the About Us Page too formally and do not pay due attention to it.`
    ;
    const loremText = `Lorem ipsum  is a classic version of conditional, meaningless text that is inserted into 
        the page layout (in the slang of designers , such text is called "fish"). Lorem ipsum  is a twisted passage from 
        Cicero's philosophical treatise On the Limits of Good and Evil, written in Latin in 45 BC.`
    ;

    return(
        <main>
            <Container className='my-logo'>
                {pictureLogo} 
            </Container>
            <Container>
                {infoCompany}
            </Container>
            <Container>
                {loremText}
            </Container>
            <Container className='advantage'>
                <Cards />
            </Container>
        </main>
    )
}




