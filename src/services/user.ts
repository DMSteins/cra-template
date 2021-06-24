import request from "./request"

interface ResponseData<T = any> {
    /**
     * 状态码
     * @type { number }
     */
    code: number;
  
    /**
     * 数据
     * @type { T }
     */
    result: T;
  
    /**
     * 消息
     * @type { string }
     */
    message: string;
}

export const getUserAPI = ()=>{
    return request.request<UserType>({
        url: "/user",
        method: "GET"
    })
}