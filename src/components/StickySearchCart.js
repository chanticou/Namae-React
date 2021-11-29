import SearchArea from '../components/SearchArea'
import CartWidget from '../components/CartWidget'

const StickySearchCart = () =>{
    return(
        <>
        <div className='contentStikySearch'>
            <ul className='stickySearch'>
                <li><SearchArea /></li>
                <li><CartWidget /></li>
            </ul>
        </div>
        </>
    )
}


export default StickySearchCart;