import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Site 100 % statique (SSG) : le cache incrémental se lit depuis les assets du
// Worker, sans bucket R2 / KV. Ne pas activer `enableCacheInterception`.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
