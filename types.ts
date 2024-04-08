type ProductType = {
    id: number;
    productName: string;
    productImage: string;
    timeStartInDays: number;
    timeStartInHours: number;
    timeStartInMinutes: number;
    isLiked: boolean;
    type: string;
    startingPrice: number;
    currencyCode: string;
}

type pathLinkType = {
    path: string;
    name: string;
}

export type {ProductType,pathLinkType}