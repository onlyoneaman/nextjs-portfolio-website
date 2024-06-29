import {getContentData, getSortedContentData} from "@/lib/data";

const postsDirectory = 'projects';

export function getSortedPostsData() {
    return getSortedContentData(postsDirectory);
}

export function getPostData(slug) {
    return getContentData(postsDirectory, slug);
}
