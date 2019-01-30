import axiosAgent from "../api/agents";


export function login(){
  return axiosAgent.get('users?page=2')
}
