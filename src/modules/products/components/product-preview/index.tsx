import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink 
      href={`/products/${product.handle}`} 
      className="group"
    >
      <div 
        data-testid="product-wrapper"
        className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_70px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden min-h-[400px]"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,.04) 0%, rgba(255,255,255,.02) 100%)',
        }}
      >
        <div className="relative overflow-hidden rounded-t-3xl h-64">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
        </div>
        <div className="flex flex-col p-5 gap-3">
          <Text className="text-white/95 text-lg font-medium" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center justify-between mt-auto">
            {cheapestPrice && (
              <div className="text-white font-bold text-2xl">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-rose/10 text-rose border border-rose/20">
              View
            </span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
