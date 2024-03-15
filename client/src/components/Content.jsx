import '../styles/Content.css'
import { menuItems } from '../jsFiles/menuData';
import { glutenFree } from '../jsFiles/glutenFree';

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
        </div>
    )
}
export default Content;