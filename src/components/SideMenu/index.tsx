import style from "./SideMenu.module.css";
import { SideMenuBottomLinks, SideMenuLinks } from "./SideMenuLinks";
import MenuLinks from "@/elements/MenuLinks";

const SideMenu = () => {
  return (
    <>
      <header className={style.sideMenu}>
        <div className={style.logo}>
          <img src="/assets/images/logo.svg" alt="" />
        </div>
        <ul>
          {SideMenuLinks.map((item, index) => (
            <li key={index}>
              <MenuLinks item={item} />
              {item.dropDown && (
                <ul>
                  {item.dropDown.map((dropMenuItem, dropMenuIndex) => (
                    <li key={dropMenuIndex}>
                      <MenuLinks item={dropMenuItem} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ul>
          {SideMenuBottomLinks.map((item, index) => (
            <li key={index}>
              <MenuLinks item={item} />
              {item.dropDown && (
                <ul>
                  {item.dropDown.map((dropMenuItem, dropMenuIndex) => (
                    <li key={dropMenuIndex}>
                      <MenuLinks item={dropMenuItem} />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default SideMenu;
