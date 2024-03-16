import '../styles/Content.css'
import { chefSpecialities } from '../jsFiles/chefSpecialities';
import { glutenFree } from '../jsFiles/glutenFree';
import { appetizers } from '../jsFiles/appetizers';
import { poultry } from '../jsFiles/poultry';
import { beefAndLamb } from '../jsFiles/beefAndLamb';
import { FriedRiceNoodlesChowMein } from '../jsFiles/FriedRiceNoodlesChowMein';
import { seafood } from '../jsFiles/seafood';
import { pork } from '../jsFiles/pork';
import { vegetables } from '../jsFiles/vegetables';
import { thaiSpecials } from '../jsFiles/thaiSpecials';
import { luncheonSpecial } from '../jsFiles/luncheonSpecial';

function Content(){
    return(
        <div className="content" >
            <h3 className='chefSpecialities' id='main_body'>Chef Specialities</h3>
            <ul>
                {chefSpecialities.map((item) => (
                    <li key={item.name}>
                        <h3>{item.name}</h3>
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
            <h3 className="poultry">Poultry</h3>
            <ul>
                {poultry.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="beef_and_lamb">Beef and Lamb</h3>
            <ul>
                {beefAndLamb.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="seafood">Seafood</h3>
            <ul>
                {seafood.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="pork">Pork</h3>
            <ul>
                {pork.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="vegetables">Vegetables</h3>
            <ul>
                {vegetables.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="fried_rice_noodles_chow_mein">Fried Rice, Noodles, Chow Mein</h3>
            <ul>
                {FriedRiceNoodlesChowMein.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="thai_specials">Thai Specials</h3>
            <ul>
                {thaiSpecials.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <h3 className="luncheon_special">Luncheon Special</h3>
            <ul>
                {luncheonSpecial.map((item) => (
                    <li key = {item.name}>
                        <h3>{item.name}</h3>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Content;