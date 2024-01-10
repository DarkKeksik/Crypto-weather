import axios from "axios"

import axiosConfigDefault from "../config/axiosConfig"

const axiosCustom = axios.create({ ...axiosConfigDefault })

export default axiosCustom
