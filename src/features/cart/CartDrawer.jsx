import {
  ArrowUpRight,
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  X,
} from 'lucide-react'
import { useCart } from './CartContext.jsx'

export default function CartDrawer({ open, onClose }) {
  const { items, count, total, changeQuantity, removeItem } = useCart()

  if (!open) return null

  const closeIfBackdropClicked = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  const scrollToProducts = () => {
    onClose()
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-[#1e1714]/35 animate-[fadeIn_.2s_ease]"
      onMouseDown={closeIfBackdropClicked}
    >
      <aside
        className="flex h-full w-full max-w-[450px] flex-col bg-white px-[18px] pb-4 pt-[22px] shadow-[-15px_0_45px_rgba(33,22,14,0.08)] animate-[slideIn_.3s_ease] md:px-7 md:pb-[22px] md:pt-[29px]"
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-[#e9e4e0] pb-[22px]">
          <div>
            <span className="mb-1 block text-[9px] font-semibold tracking-[2px] text-[#9b8d83]">
              YOUR SELECTION
            </span>
            <h2 className="text-[23px] font-medium tracking-[-.7px] md:text-[25px]">
              Your Cart{' '}
              <span className="text-[15px] text-[#77716d]">({count})</span>
            </h2>
          </div>
          <button
            type="button"
            className="p-1 text-[#28211f]"
            aria-label="Close cart"
            onClick={onClose}
          >
            <X size={21} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-[18px] grid h-[60px] w-[60px] place-items-center rounded-full bg-[#f7f1ed] text-[#8b776a]">
              <ShoppingCart size={25} />
            </div>
            <h3 className="mb-2 text-xl font-medium">Your cart is waiting</h3>
            <p className="mb-5 max-w-[235px] text-xs leading-[1.7] text-[#77716d]">
              Looks like you haven't found your favourites yet.
            </p>
            <button
              type="button"
              className="min-h-[42px] border border-[#3b2d29] bg-[#3b2d29] px-5 text-[11px] font-medium text-white hover:bg-[#5b443c]"
              onClick={scrollToProducts}
            >
              Explore Products
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto py-2">
              {items.map((item) => {
                const toneClass =
                  item.tone === 'sage'
                    ? 'bg-[#e8e6dc]'
                    : item.tone === 'cream'
                      ? 'bg-[#eee9e1]'
                      : item.tone === 'rose'
                        ? 'bg-[#f4e2dc]'
                        : 'bg-[#f5e7df]'

                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 border-b border-[#f0ebe7] py-[18px]"
                  >
                    <div
                      className={`grid h-[85px] w-[76px] shrink-0 place-items-center ${toneClass}`}
                    >
                      <span className="text-[9px] uppercase tracking-wide text-[#89766a]">
                        {item.category}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-[13px] font-medium">
                        {item.name}
                      </h3>
                      <span className="text-xs">${item.price}</span>
                      <div className="mt-2.5 flex w-max items-center gap-3 border border-[#e9e4e0] px-2 py-1">
                        <button
                          type="button"
                          className="p-0.5 text-[#776b63]"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => changeQuantity(item.id, -1)}
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-[9px] text-center text-[11px]">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          className="p-0.5 text-[#776b63]"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => changeQuantity(item.id, 1)}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-1.5 text-[#a79c94] hover:text-[#9b4b3f]"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-[#e9e4e0] pt-5">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <strong>${Number(total).toFixed(2)}</strong>
              </div>
              <p className="my-2.5 text-[10px] text-[#77716d]">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#3b2d29] px-5 text-[11px] font-medium text-white hover:bg-[#5b443c]"
                onClick={() =>
                  window.alert(
                    'Demo only: connect a payment provider to support checkout.',
                  )
                }
              >
                Continue to Checkout <ArrowUpRight size={15} />
              </button>
              <button
                type="button"
                className="w-full py-3.5 text-[11px] underline underline-offset-4"
                onClick={onClose}
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
