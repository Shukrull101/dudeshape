import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { products } from '../../shared/products.js'

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return products.slice(0, 3)
    }

    return products
      .filter((product) => {
        const searchableText = `${product.name} ${product.category} ${product.description}`
        return searchableText.toLowerCase().includes(normalizedQuery)
      })
      .slice(0, 4)
  }, [query])

  const chooseProduct = (product) => {
    setQuery(product.name)
    setOpen(false)
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (results.length > 0) {
      chooseProduct(results[0])
    } else {
      setOpen(true)
    }
  }

  const getSwatchClass = (tone) => {
    if (tone === 'sage') return 'bg-[#e6e4d9]'
    if (tone === 'cream') return 'bg-[#eae4d8]'
    if (tone === 'rose') return 'bg-[#f0d6ce]'
    return 'bg-[#f5e7df]'
  }

  return (
    <div className="relative z-20 w-full max-w-[450px] md:max-w-[350px]">
      <form
        className="flex h-[46px] border border-[#eee8e4] bg-white shadow-[0_5px_16px_rgba(59,45,41,0.02)] md:h-11"
        onSubmit={handleSubmit}
      >
        <input
          className="min-w-0 flex-1 bg-transparent px-[15px] text-xs text-[#28211f] outline-none placeholder:text-[#a9a3a0]"
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
          }}
          placeholder="Search..."
          aria-label="Search products"
        />

        {query && (
          <button
            type="button"
            className="bg-transparent px-2 text-xl text-[#777]"
            aria-label="Clear search"
            onClick={() => setQuery('')}
          >
            ×
          </button>
        )}

        <button
          type="submit"
          className="m-1 grid w-[43px] shrink-0 place-items-center bg-[#3b2d29] text-white transition-colors hover:bg-[#5b443c]"
          aria-label="Search"
        >
          <Search size={17} />
        </button>
      </form>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+7px)] z-40 border border-[#e9e4e0] bg-white p-2.5 shadow-[0_18px_45px_rgba(49,36,27,0.12)]">
          <div className="px-2 pb-2 pt-1 text-[9px] uppercase tracking-[1.5px] text-[#95877e]">
            {query ? 'Search results' : 'Popular searches'}
          </div>

          {results.length > 0 ? (
            results.map((product) => (
              <button
                type="button"
                key={product.id}
                className="flex w-full items-center gap-3 bg-white px-2 py-2.5 text-left hover:bg-[#faf7f5]"
                onClick={() => chooseProduct(product)}
              >
                <span
                  className={`h-[38px] w-[35px] shrink-0 ${getSwatchClass(product.tone)}`}
                />
                <span className="grid flex-1 gap-0.5">
                  <strong className="text-xs font-medium">{product.name}</strong>
                  <small className="text-[10px] text-[#77716d]">
                    {product.category}
                  </small>
                </span>
                <span className="text-xs">${product.price}</span>
              </button>
            ))
          ) : (
            <p className="px-2 py-1 text-xs text-[#77716d]">
              No products found. Try “serum” or “lotion”.
            </p>
          )}

          <button
            type="button"
            className="mt-1 w-full border-t border-[#e9e4e0] py-2.5 text-[10px] text-[#77716d]"
            onClick={() => setOpen(false)}
          >
            Close suggestions
          </button>
        </div>
      )}
    </div>
  )
}
