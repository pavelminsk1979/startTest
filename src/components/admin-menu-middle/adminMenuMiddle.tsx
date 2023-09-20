import * as Tabs from '@radix-ui/react-tabs';
import {useState} from "react";
import st from './adminMenuMiddle.module.scss'

type AdminMenuMiddleType = {
    name: string
}
export const AdminMenuMiddle = () => {
    const [active, setActive] = useState('Спонсорство')

    const handlerOnClick = (name: string) => {
        alert(name)
      setActive(name)
    }
    const stateTabComponent: AdminMenuMiddleType[] = [
        { name: 'Спонсорство'},
        { name: 'Подписчики'},
        { name: 'Розыгрыши'}
    ]
    return (

        <Tabs.Root>
            <Tabs.List className={st.frame}>
                {
                    stateTabComponent.map((e: AdminMenuMiddleType) => {
                        return (
                            <Tabs.Trigger
                                onClick={() => handlerOnClick(e.name)}
                                key={e.name}
                                className={active === e.name ? st.active : st.tabTrigger}
                                value={e.name}>
                                {e.name}
                            </Tabs.Trigger>
                        )
                    })
                }
            </Tabs.List>
        </Tabs.Root>
    )
}