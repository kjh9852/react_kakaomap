import styles from './MobileNavigation.module.css';
import list from '../images/list.png'
import star from '../images/star_border.png';
import category from '../images/category.png';

const MobileNavigation = (props) => {
    return (
        <div className={styles.container}>
            <div>
                <ul className={styles.nav}>
                    <li onClick={props.openListHandler}>
                        <img src={list} alt="list"/>
                        <span>List</span>
                    </li>
                    <li>
                        <img src={star} alt="favorite"/>
                        <span>Favorite</span>
                    </li>
                    <li>
                        <img src={category} alt="category"/>
                        <span>Category</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default MobileNavigation;