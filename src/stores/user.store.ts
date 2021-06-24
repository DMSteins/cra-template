import { makeAutoObservable, runInAction } from "mobx";
import { getUserAPI } from "services/user"
class UserStore{

    user: UserType = {}
    count: number = 0
    constructor(){
        makeAutoObservable(this)
    }

    saveUserInfo = async ()=>{
        const result = await getUserAPI()
        console.log(result)
        if(!result) throw new Error('获取用户信息失败');
        runInAction(()=>{
            this.user = result.data
        })

    }
}

export default UserStore