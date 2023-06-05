import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 3000,
});
// 通过上述配置，创建的 instance 对象可以使用相对路径来发送请求，
// 会自动将相对路径与 baseURL 进行拼接，并具有指定的超时时间和请求头信息

export default axiosClient;