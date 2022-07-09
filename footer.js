import twitter from './Twitter Icon.png'
import insta from './Instagram Icon.png'
import git from './GitHub Icon.png'
import facebook from './Facebook Icon.png'


function footer () {
    return(
        <footer>
            <socials>
            <div className="social--links">
                <img src={twitter} alt="twitter"></img>
                <img src={insta} alt="insta"></img>
                <img src={git} alt="git"></img>
                <img src={facebook} alt="facebook"></img>
            </div>
            </socials>
        </footer>
    )
}

export default footer;