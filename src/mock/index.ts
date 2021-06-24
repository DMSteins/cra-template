import Mock from 'mockjs';

const getUser = Mock.mock("/api/user", {
    id: '123',
    name: "zhangsan",
    avatar: ""
})

export default getUser