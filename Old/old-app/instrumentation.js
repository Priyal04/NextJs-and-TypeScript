import { registerOTel } from '@vercel/otel'
 
export function register() {
  registerOTel('old-app')
}


//---manual
// export async function register() {
//     if (process.env.NEXT_RUNTIME === 'nodejs') {
//       await import('./instrumentation.node.ts')
//     }
//   }