import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return(
        <nav className={classes.nav}>
            <Link to='/hisyam-portfolio/'><div className={classes.logo}>
            <Icon 
            className="bi bi-house"
            size= '28'
            />
            </div>
            </Link>
            <ul className={classes.list}>
                <li>
                    <NavLink 
                    to='/hisyam-portfolio/' 
                    end 
                    className={({isActive}) => isActive ? classes.active : undefined}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/hisyam-portfolio/about' 
                    className={({isActive}) => isActive ? classes.active : undefined}
                    >
                        About me
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/hisyam-portfolio/experience' 
                    className={({isActive}) => isActive ? classes.active : undefined}
                    >
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/hisyam-portfolio/education' 
                    className={({isActive}) => isActive ? classes.active : undefined}
                    >
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/hisyam-portfolio/certificates' 
                    className={({isActive}) => isActive ? classes.active : undefined}>
                        Certificates
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/hisyam-portfolio/projects' 
                    className={({isActive}) => isActive ? classes.active : undefined}>
                        Projects
                    </NavLink>
                </li>
            </ul>
            <div>

            </div>
        </nav>
    )
}

export default MainNavigation