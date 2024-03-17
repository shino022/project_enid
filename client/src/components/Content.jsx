import '../styles/Content.css'
import { chefSpecialities } from '../jsFiles/chefSpecialities';
import { appetizers } from '../jsFiles/appetizers';
import { poultry } from '../jsFiles/poultry';
import { beefAndLamb } from '../jsFiles/beefAndLamb';
import { FriedRiceNoodlesChowMein } from '../jsFiles/FriedRiceNoodlesChowMein';
import { seafood } from '../jsFiles/seafood';
import { pork } from '../jsFiles/pork';
import { vegetables } from '../jsFiles/vegetables';
import { thaiSpecials } from '../jsFiles/thaiSpecials';
import { luncheonSpecial } from '../jsFiles/luncheonSpecial';
import spiceLogo from '../assets/icons/spice.png';
import glutenFreeLogo from '../assets/icons/glutenfree_2.png';

function Content(){
    return(
        <div className="menu_content" id='main_body'>
            <h3 className='chefSpecialities'>Chef Specialities</h3>
            <ul>
                {chefSpecialities.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <p>{item.description}</p>           
                                    
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className='appetizers'>Appetizers</h3>
            <ul>
                {appetizers.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="poultry">Poultry</h3>
            <ul>
                {poultry.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="beef_and_lamb">Beef and Lamb</h3>
            <ul>
                {beefAndLamb.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="seafood">Seafood</h3>
            <ul>
                {seafood.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="pork">Pork</h3>
            <ul>
                {pork.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="vegetables">Vegetables</h3>
            <ul>
                {vegetables.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="fried_rice_noodles_chow_mein">Fried Rice, Noodles, Chow Mein</h3>
            <ul>
                {FriedRiceNoodlesChowMein.map((item) => (
                    <li key = {item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <p>{item.choice}</p>           
                        
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="thai_specials">Thai Specials</h3>
            <ul>
                {thaiSpecials.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>
                        <span>${item.price}</span>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 className="luncheon_special">Luncheon Special</h3>
            <p className='luncheon_special_description'> Served with choice of brown, white, or roast pork fried rice & choice of wonton, egg drop, or hot and sour soup OR 
                an egg or spring roll. 
                Avaliable Tuesdays - Saturdays 12:00 pm - 3:00 pm. (Sundays and Holidays Excluded.)
            </p>
            <h3 className='luncheon_special_price'>$12.50 Each</h3>
            <ul>
                {luncheonSpecial.map((item) => (
                    <li key={item.name}>
                        <h4>{item.name}{item.spice && <img src={spiceLogo} alt='spicy' className='spicy_logo'/>} {item.gluten && <img src={glutenFreeLogo} alt='glutenfree' className='gluten_free_logo'/>}</h4>    
                        <p>{item.choice}</p>           
                    </li>
                ))}
            </ul>
            <p className='end_line'>* * *</p>
        </div>
    )
}
export default Content;