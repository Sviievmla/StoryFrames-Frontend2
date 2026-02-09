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
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink 
      href={`/products/${product.handle}`} 
      className="group block"
    >
      <div 
        data-testid="product-wrapper" 
        className="storyframes-card border border-storyframes-line rounded-3xl bg-storyframes-panel shadow-lg overflow-hidden flex flex-col min-h-[520px] transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl"
      >
        {/* Product Image */}
        <div className="h-64 bg-storyframes-panel2 relative z-10 overflow-hidden">
          <div className="w-full h-full relative">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="full"
              isFeatured={isFeatured}
              className="!p-0 !shadow-none !rounded-none !bg-transparent aspect-auto h-full"
            />
          </div>
        </div>
        
        {/* Product Body */}
        <div className="p-5 relative z-10 flex-1 flex flex-col">
          <h3 className="font-serif text-2xl leading-tight text-storyframes-text mb-2" data-testid="product-title">
            {product.title}
          </h3>
          <p className="text-storyframes-muted text-sm leading-relaxed flex-1">
            {product.description || ""}
          </p>
        </div>
        
        {/* Product Meta */}
        <div className="mt-auto p-5 pt-4 border-t border-storyframes-line/20 relative z-10 flex justify-between items-end gap-3">
          <div className="flex flex-col">
            {cheapestPrice && (
              <div className="text-2xl font-black text-storyframes-text tracking-tight">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
            <div className="text-xs text-storyframes-muted mt-1 leading-tight">
              {product.metadata?.paymentNote || "PayPal (card) • Bulgaria COD"}
            </div>
          </div>
          <div className="storyframes-tag text-storyframes-text">
            Open details →
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
