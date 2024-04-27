import './Header.css'

function Header({setPage}){
    function deleteClick(){
        document.title = 'SamOS';
        setPage('home');
    }
    return(
        <div id='header'>
            <button id='delete' onClick={()=>deleteClick()}>x</button>
        </div>
    );
}

export default Header