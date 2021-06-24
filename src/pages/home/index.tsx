import { FC ,useEffect, useContext } from 'react';
import { StoreContext } from "stores/index"
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
const Home : FC = ()=>{
    const { user } = useContext(StoreContext);

    useEffect(()=>{
        user.saveUserInfo()
    }, [])

    const clickEvent = ()=>{
        runInAction(()=>{
            user.count += 1
        })
        
        console.log(user.count)
    }
    return (
        <div>
            home
            <div>{user.count}</div>
            <div onClick={clickEvent} style={{border: "1px solid #111",width: "100px"}}>计数器按钮</div>
            <Link to="/self">self</Link>
        </div>
        
    )
}
export default observer(Home)