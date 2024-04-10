import { Await, NavLink } from '@remix-run/react';
import { Suspense } from 'react';
import { useRootLoaderData } from '~/root';
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { Image } from '@shopify/hydrogen';
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";

/**
 * @param {HeaderProps}
 */
export function Header({ header, isLoggedIn, cart }) {
  const { shop, menu } = header;
  return (
    // <header className="header">
    //   <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
    //     {/* <strong>{shop.name}</strong> */}
    //     <Image
    //       data={shop.brand.logo.image}
    //       aspectRatio="2/1"
    //     />
    //   </NavLink>
    //   <HeaderMenu
    //     menu={menu}
    //     viewport="desktop"
    //     primaryDomainUrl={header.shop.primaryDomain.url}
    //   />
    //   <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    // </header>


    // <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    //   <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    //     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
    //       <Image
    //         data={shop.brand.logo.image}
    //         className="h-10"
    //       />
    //       {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{shop.name}</span> */}
    //     </a>
    //     <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
    //       <span className="sr-only">Open main menu</span>
    //       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    //       </svg>
    //     </button>
    //     <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
    //       <HeaderMenu
    //         menu={menu}
    //         viewport="desktop"
    //         primaryDomainUrl={header.shop.primaryDomain.url}
    //       />
    //     </div>
    //   </div>
    //   <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 hidden">
    //     <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
    //       <ul>
    //         <li>
    //           <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
    //             <div className="font-semibold">Online Stores</div>
    //             <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>


    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              data={shop.brand.logo.image}
              className="h-10"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <HeaderMenu
              menu={menu}
              viewport="desktop"
              primaryDomainUrl={header.shop.primaryDomain.url}
            />
          </div>
        </div>
      </nav>
    </div>

  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 * }}
 */
export function HeaderMenu({ menu, primaryDomainUrl, viewport }) {
  const { publicStoreDomain } = useRootLoaderData();
  const className = `header-menu-${viewport}`;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (

          item.items.length > 0 ?
            (
              <li>
                <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">{item.title} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                </button>
              </li>
            )
            : (
              <li>
                <a href={url} className="text-gray-900 dark:text-white hover:underline">{item.title}</a>
              </li>
            )
        );
      })}
    </ul >
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({ isLoggedIn, cart }) {
  return (
    // <nav className="header-ctas" role="navigation">
    //   <HeaderMenuMobileToggle />
    //   <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
    //     <Suspense fallback="Sign in">
    //       <Await resolve={isLoggedIn} errorElement="Sign in">
    //         {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
    //       </Await>
    //     </Suspense>
    //   </NavLink>
    //   <SearchToggle />
    //   <CartToggle cart={cart} />
    // </nav>

    <nav className="flex items-center space-x-6 rtl:space-x-reverse">
      <HeaderMenuMobileToggle />
      <a href="tel:5541251234" className="text-sm text-dark-500 dark:text-white hover:underline">(555) 412-1234</a>
      <NavLink className="text-sm  text-gray-500 dark:text-white hover:underline" prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3>☰</h3>
    </a>
  );
}

function SearchToggle() {
  return <a href="#search-aside" className="text-sm flex items-center gap-1 text-dark-500 dark:text-blue-500 hover:underline"><FaSearch /> Search</a>;
}

/**
 * @param {{count: number}}
 */
function CartBadge({ count }) {
  return <a className="text-sm text-dark-500 flex items-center gap-1 dark:text-blue-500 hover:underline" href="#cart-aside"><FaShoppingCart /> Cart {count}</a>;
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({ cart }) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>} HeaderProps */
/** @typedef {'desktop' | 'mobile'} Viewport */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('./Layout').LayoutProps} LayoutProps */
