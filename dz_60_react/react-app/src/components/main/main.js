import './main.css';
import logo from '../../img/logo.png';
import Cards from './company-advantage';

function createContainer(content, className) {
    return(
        <div className={`container ${className ? className : ''}`}>
            {content}
        </div>
    )
}

export default function MainComp() {
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
            {createContainer(pictureLogo, 'my-logo')}
            {createContainer(infoCompany)}
            {createContainer(loremText)}
            {createContainer(<Cards />, 'advantage')}
        </main>
    )
}






