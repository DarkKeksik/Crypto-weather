import axios from "axios"

import { axiosConfig } from "../config"

const axiosCustom = axios.create(
  axiosConfig.axiosConfigDefault
)

export default axiosCustom
