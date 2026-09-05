import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
	// No R2 cache needed for this simple chat app
});
