import {getContentData, getSortedContentData} from "@/lib/data";

const postsDirectory = 'blogs';

export function getSortedPostsData() {
    return getSortedContentData(postsDirectory);
}

export function getPostData(slug) {
    return getContentData(postsDirectory, slug);
}
