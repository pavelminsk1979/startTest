import st from './AdminMenuBig.module.scss'
import {useState} from "react";

type AdminMenuBigType = {
    icon: string
    name: string
}
export const AdminMenuBig = () => {
    const [open, setOpen] = useState(false)
    const handlerOpen = () => {
        setOpen(true)
    }
    const handlerClosed = () => {
        setOpen(false)
    }
    const dataMenuBigType: AdminMenuBigType[] = [
        {icon: '1', name: 'Спонсорство'},
        {icon: '2', name: 'Подписчики'},
        {icon: '3', name: 'Розыгрыши'},
        {icon: '4', name: 'Рассылка'},
        {icon: '5', name: 'Аналитика'},
        {icon: '6', name: 'Прибыль'},
    ]
    const handlerOnClickLink = (nameLink:string) => {
        console.log(nameLink)
    }
    return (
        open
            ? <div onMouseEnter={handlerOpen} onMouseLeave={handlerClosed} className={`${st.frameMenu} ${st.frameMenuOpen}`}>
                {/*  {open && <div className={st.darkZone} onClick={handlerOnklikToggle}/>}*/}
                <div>
                    <div className={st.logo}>TELEGIV.COM</div>
                    <div className={st.menu}>Меню</div>
                    <div>
                        {dataMenuBigType.map((e: AdminMenuBigType) => {
                            return (
                                <div key={e.name} className={st.icon}
                                     onClick={() => handlerOnClickLink(e.name)}>{e.icon}{e.name}</div>
                            )
                        })}
                    </div>
                </div>

                <div className={st.iconOut}>-&gt; Выйти</div>
            </div>


            : <div onMouseEnter={handlerOpen} onMouseLeave={handlerClosed}  className={`${st.frameMenu} ${st.frameMenuClosed}`}>
                <div>
                    <div className={st.logo}>T</div>
                    <div className={st.menu}>Меню</div>
                    <div>
                        {dataMenuBigType.map(({name,icon}) => {
                            return (
                                <div key={name} className={st.icon} onClick={() => handlerOnClickLink(name)}>{icon}</div>
                            )
                        })}
                    </div>
                </div>

                <div className={st.iconOut}>-&gt;</div>

            </div>
    )
}