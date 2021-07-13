export type IdInfoType = {
    id: number
    name: string
    avatar: string
}
export type PhotosType = {
    small: string
    large: string
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}