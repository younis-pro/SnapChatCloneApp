import { GET_USERS } from "../../config/urls";
import { apiGet } from "../../utils/utils";

export function getUsers(query = '', headers) {
    return apiGet(GET_USERS + query, {}, headers)
}


