import axios from "axios"

import { axiosConfig } from "@/shared"

const axiosCustom = axios.create(
  axiosConfig.axiosConfigDefault
)

export default axiosCustom
