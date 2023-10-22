## Deploy Static App

```
> npx next export -o dist

> npx serve dist

```

## Strapi build

```
> cd mirko-next-shop-strapi
> npm i
> npm run build

Route (pages)                                    Size     First Load JS
┌ ● / (ISR: 300 Seconds) (548 ms)                1.41 kB        89.8 kB
├   /_app                                        0 B              83 kB
├ ○ /404                                         181 B          83.2 kB
├ λ /api/cart                                    0 B              83 kB
├ λ /api/login                                   0 B              83 kB
├ λ /api/logout                                  0 B              83 kB
├ λ /api/user                                    0 B              83 kB
├ ○ /cart (433 ms)                               1.45 kB        86.5 kB
├ ● /products/[id] (ISR: 300 Seconds) (3394 ms)  1.68 kB        90.1 kB
├   ├ /products/4 (609 ms)
├   ├ /products/2 (607 ms)
├   ├ /products/1 (605 ms)
├   ├ /products/3 (585 ms)
├   ├ /products/5 (497 ms)
├   └ /products/6 (491 ms)
└ ○ /sign-in (468 ms)                            1.58 kB        86.7 kB
+ First Load JS shared by all                    85 kB
  ├ chunks/framework-3b5a00d5d7e8d93b.js         45.4 kB
  ├ chunks/main-d2a793b6dc23a82a.js              25.7 kB
  ├ chunks/pages/_app-4a52387a3383613e.js        11.2 kB
  ├ chunks/webpack-8fa1640cc84ba8fe.js           750 B
  └ css/bd139315d73be042.css                     2.01 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)


> npm start

email: admin@example.com
pw: Admin123


```
