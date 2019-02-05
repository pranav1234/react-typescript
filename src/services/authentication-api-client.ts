import axiosAgent from "../api/agents";
import {models} from "../features/authentication"


export function login(data:models.LoginData){
  return axiosAgent.post('auth/local',data)
}
