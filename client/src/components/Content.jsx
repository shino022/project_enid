import '../styles/Content.css'
import { menuItems } from '../jsFiles/menuData';
import { glutenFree } from '../jsFiles/glutenFree';
import { appetizers } from '../jsFiles/appetizers';
import { beefAndLamb } from '../jsFiles/beefAndLamb';
import { FriedRiceNoodlesChowMein } from '../jsFiles/FriedRiceNoodlesChowMein';
import { seafood } from '../jsFiles/seafood';
import { pork } from '../jsFiles/pork';
import { vegetables } from '../jsFiles/vegetables';
import { thaiSpecials } from '../jsFiles/thaiSpecials';

function Content(){
    return(
        <div className="content">
            <h2 className='menu_gluten'>Menu</h2>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <h2>{item.name}</h2>
                        <p>Ingredients: {item.ingredients}</p>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className='appetizers'>Appetizers</h3>
            <ul>
                {appetizers.map((item) => (
                    <li key={item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className='menu_gluten_free'>Gluten Free</h2>
            <ul>
                {glutenFree.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <p>Ingredients: {item.ingredients}</p>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className="beef_and_lamb">Beef and Lamb</h2>
            <ul>
                {beefAndLamb.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className="seafood">Seafood</h2>
            <ul>
                {seafood.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className="pork">Pork</h2>
            <ul>
                {pork.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className="vegetables">Vegetables</h2>
            <ul>
                {vegetables.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className="fried_rice_noodles_chow_mein">Fried Rice, Noodles, Chow Mein</h2>
            <ul>
                {FriedRiceNoodlesChowMein.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h2 className="thai_specials">Thai Specials</h2>
            <ul>
                {thaiSpecials.map((item) => (
                    <li key = {item.name}>
                        <h2>{item.name}</h2>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Content;