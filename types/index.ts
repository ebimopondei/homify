export interface FeaturesType {
    id: number;
    img: string;
    lead: string;
    sub: string;
    action: string;
}

export interface OffersType {
    id: number;
    status: string;
    img: string;
    alt: string;
    title: string;
    price: string;
    location: string;
    description: string;
    owner: string;
}

export type Props ={
    children: React.ReactNode;
}

export interface PartnerType {
    lead: string;
    sub: string;
    cta: string;
}