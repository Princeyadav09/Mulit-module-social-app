import { CommonUserResponse } from "./user";

export interface BaseListResponse {
    id: number;
    listName: string;
    description: string;
    pinnedDate: string;
    altWallpaper: string;
    wallpaper: string;
    listOwner: CommonUserResponse;
    isPrivate: boolean;
    isFollower: boolean;
    membersSize: number;
    followersSize: number;
}

export interface TweetListResponse {
    id: number;
    listName: string;
    altWallpaper: string;
    wallpaper: string;
    listOwner: CommonUserResponse;
    isPrivate: boolean;
    membersSize: number;
}

export interface ListsOwnerMemberResponse {
    id: number;
    fullName: string;
    username: string;
    about: string;
    avatar: string;
    isPrivateProfile: boolean;
    isMemberInList?: boolean;
}

export interface ListResponse {
    id: number;
    listName: string;
    description: string;
    altWallpaper: string;
    wallpaper: string;
    listOwner: CommonUserResponse;
    isFollower: boolean;
    isListPinned: boolean;
}

export interface ListUserResponse {
    id: number;
    listName: string;
    description: string;
    altWallpaper: string;
    wallpaper: string;
    listOwner: CommonUserResponse;
    isPrivate: boolean;
    isListPinned: boolean;
}

export interface PinnedListResponse {
    id: number;
    listName: string;
    altWallpaper: string;
    wallpaper: string;
    isPrivate: boolean;
    isListPinned: boolean;
}

export interface SimpleListResponse {
    id: number;
    listName: string;
    altWallpaper: string;
    wallpaper: string;
    isMemberInList: boolean;
    isPrivate: boolean;
}
