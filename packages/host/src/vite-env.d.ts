/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "order/*"{
  export { routes }
}

declare module "administration/*"{
  export { routes }
}

declare module "host/*"{
  export { counterStore, pinia }
}