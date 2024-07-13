import {getContentData, getSortedContentData} from "@/lib/data";

const postsDirectory = 'travel';

export function getSortedTravelsData() {
    return getSortedContentData(postsDirectory);
}

export function getTravelData(slug) {
    return getContentData(postsDirectory, slug);
}
