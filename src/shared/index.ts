/**
 * UI components
 */
export { default as Preloader } from "./ui/Preloader/Preloader"
export { default as Description } from "./ui/Description/Description"
export { default as Link } from "./ui/Link/Link"
export { default as TagsPanel } from "./ui/TagsPanel/TagsPanel"
export { default as Tag } from "./ui/Tag/Tag"
export { default as Modal } from "./ui/Modal/Modal"
export { default as Button } from "./ui/Button/Button"
export { default as Select } from "./ui/Select/Select"
export { default as LiningBg } from "./ui/LiningBg/LiningBg"
export { default as Pagination } from "./ui/Pagination/Pagination"
export { default as WrapPageContent } from "./ui/WrapPageContent/WrapPageContent"
export * as Icons from "./ui/Icons"

export * as TypesTagsPanel from "./ui/TagsPanel/TagsPanel.types"
export * as TypesTag from "./ui/Tag/Tag.types"
export * as TypesSelect from "./ui/Select/Select.types"

/**
 * Lib
 */
export { default as axiosCustom } from "./lib/axiosCustom"
export * as dateUtils from "./lib/date"
export * as hooksCommons from "./lib/hooks"
/**
 * @TODO Need move to entities
 */
export * as urlsUtils from "./lib/urls"

/**
 * API
 */
export { default as mockAdapter } from "./api/mockAdapter"
export * as requests from "./api/requests"

/**
 * Configs
 */
export * as routing from "./config/routing"
export * as endpoints from "./config/endpoints"
export * as axiosConfig from "./config/axiosConfig"
export { dataLinks } from "./config/routing"
export { authKeys } from "./config/axiosConfig"

/**
 * Types
 */
export * as typesCommons from "./types/axios"
