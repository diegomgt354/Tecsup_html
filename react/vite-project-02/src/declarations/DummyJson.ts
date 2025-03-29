type DummyProductDimensions = {
    width: number
    height: number
    depth: number
}

type DummyProductReviews = {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

type DummyProductMeta = {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}

type DummyProduct = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: DummyProductDimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: DummyProductReviews[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: DummyProductMeta
    images: string[]
    thumbnail: string
  }

type DummySession = {
    accessToken:string
    refreshToken:string
    id:number
    username:string
    email:string
    firstName:string
    lastName:string
    gender:string
    image:string
}

type DummyCategories = {
    slug:string
    name:string
    url:string
}


type DummyProductsByCategories = {
    products: DummyProduct[]
    total:number
    skip:number
    limit:number
}

  
  export type {DummyProduct, DummySession, DummyCategories, DummyProductsByCategories}