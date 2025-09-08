import { createRootRoute, createRoute, createRouter, Outlet, RouterProvider } from '@tanstack/react-router'
import App from './App'
import { MarkdownStreaming } from './components/markdown-streaming'

function RootLayout() {
  return <Outlet />
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const streamingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experiments/markdown-streaming',
  component: MarkdownStreaming,
})

const routeTree = rootRoute.addChildren([indexRoute, streamingRoute])

export const router = createRouter({ routeTree })

export function AppRouter() {
  return <RouterProvider router={router} />
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


