import {
  resolveEnv,
  createContextClient,
  createAdminClient,
} from "@supabase/server/core";

const { data: env, error } = resolveEnv();
if (error) {
  throw new Error(`Missing Supabase configurations: ${error.message}`);
}

function createClients() {
  try {
    return {
      supabase: createContextClient(),
      supabaseAdmin: createAdminClient(),
    };
  } catch (error) {
    throw new Error(`Missing Supabase configuration: ${error.message}`);
  }
}

const { supabase, supabaseAdmin } = createClients();

export { supabase, supabaseAdmin };

// import {
//   resolveEnv,
//   createContextClient,
//   createAdminClient,
// } from "@supabase/server/core";

// // Expressly pass variables if they use custom names (e.g., Next.js defaults)
// const envConfig = {
//   supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
//   supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY,
//   supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
// };

// const { data: env, error } = resolveEnv(envConfig);

// if (error) {
//   throw new Error(`Missing Supabase configuration: ${error.message}`);
// }

// function createClients() {
//   try {
//     return {
//       supabase: createContextClient(envConfig),
//       supabaseAdmin: createAdminClient(envConfig),
//     };
//   } catch (error) {
//     throw new Error(`Missing Supabase configuration: ${error.message}`);
//   }
// }

// const { supabase, supabaseAdmin } = createClients();
// export { supabase, supabaseAdmin };