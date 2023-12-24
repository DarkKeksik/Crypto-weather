import { axiosCustom } from "../lib"
import { endpoints } from "../config"

/**
 * C - Created
 * R - Read
 * U - Update
 * D - Delete
 */
export const createNewsCoindesk: any = async () => {
  await axiosCustom
    .post(endpoints.cryptoNewsCreate)
    .then(data => console.log(data))
    .catch(data => console.error(data))
}

export const readNewsCoindesk: any = async () => {
  await axiosCustom
    .get(endpoints.cryptoNewsCoindesk)
    .then(data => console.log(data))
    .catch(data => console.error(data))
}

export const updateNewsCoindesk: any = async () => {
  await axiosCustom
    .patch(endpoints.cryptoNewsUpdate)
    .then(data => console.log(data))
    .catch(data => console.error(data))
}

export const deleteNewsCoindesk: any = async () => {
  await axiosCustom
    .delete(endpoints.cryptoNewsDelete)
    .then(data => console.log(data))
    .catch(data => console.error(data))
}
